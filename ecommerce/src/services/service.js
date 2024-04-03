
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";
import { categorias, subcategorias, misc } from "./api/meli.api";
import { transformProductData } from "../helper/transformProductData";

export const getApiProducts = async ({ category, subCategory, limits }) => {
    
    let products;
    let header;
    const licences = ['Star Wars', 'Harry Potter', 'Naruto', 'Pokemon', 'One Piece'];
    
    console.log('service; ', category, '| subcategory; ', subCategory, '| limites: ', limits)
    
    if (category === 'funkos'){
        if(!licences.includes(subCategory) && subCategory){
            throw new Error(`La subcategoría "${subCategory}" no válida para funkos`);
        }
        try{
            const funkosProducts = [];
            const productRef = collection(db, "funkos");
            const q = subCategory ? query(productRef, where('licence', '==', subCategory)) : productRef;
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                funkosProducts.push({ ...doc.data(), id: doc.id });
            });
            return{
                products : transformProductData(funkosProducts).product
            }

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

        if(category === 'all' || category === ''){
            url += misc.all
        }else if(category === 'novedades'){
            url += misc.novedades
        }

        if(limits && limits !== null){
            url += `&limit=${limits}`;
        }
        
        console.log('URL::', url)

        try{
            const response = await fetch(url);
            const json = await response.json();
            const { results, paging } = json
            return{
                products: transformProductData(results).product,
                header: paging
            }
        } catch (error) {
            console.log('hubo un problema al traer los libritos diria mi tia: ', error)
        }
    }

    return { products, header };
}