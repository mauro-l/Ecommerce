
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { categorias, subcategorias, misc } from "./api/meli.api";
import { transformProductData } from "../helper/transformProductData";

export const getApiProducts = async ({ category, subCategory, limits }) => {
    
    let products = [];
    
    console.log('service; ', category, 'limites: ', limits)
    
    if (category === 'funkos'){
        
        try{
            const funkosProducts = [];
            const productRef = collection(db, "funkos");
            const querySnapshot = await getDocs(productRef);
            querySnapshot.forEach((doc) => {
                funkosProducts.push({ ...doc.data(), id: doc.id });
            });
            products = transformProductData(funkosProducts).product

        } catch (error){
            console.log('error al traer los funkos: ', error)
        }
    }else{

        let url='https://api.mercadolibre.com/sites/MLA/search?seller_id=';

        if(!category){
            url += misc.all
        }

        if(category === 'comicsymangas'){
            url += categorias.comicsymangas;
            if(subCategory === 'comics'){
                url += subcategorias.comics
            }else if(subCategory === 'mangas'){
                url += subcategorias.mangas
            }else{
                url
            }
        }

        if(category === 'libros'){
            url += categorias.libros;
            if(subCategory === 'novelas'){
                url += subcategorias.novelas
            }else if(subCategory === 'books'){
                url += subcategorias.books
            }else{
                url
            }
        }

        if(category === 'all'){
            url += misc.all
        }else if(category === 'novedades'){
            url += misc.novedades
        }else{
            console.error('categoria no encontrada.')
        }

        if(limits && limits !== null){
            url += `&limit=${limits}`;
        }

        console.log('URL::', url)

        try{
            const response = await fetch(url);
            const json = await response.json();
            products = transformProductData(json.results).product;
        } catch (error) {
            console.log('hubo un problema al traer los libritos diria mi tia: ', error)
        }
    }

    return products;
}