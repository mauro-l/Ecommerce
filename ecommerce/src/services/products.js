
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

//import { getProducts } from "../asyncMock";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */

//let apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380';

export const getApiProducts = async (category) => {
    
    let products = [];
    
    if (category === 'libros'){
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505&category=MLA3025&limit=16`);
            const data = await response.json();
            products = data.results;
        } catch (error) {
            console.log('hubo un problema al traer los productos de la libreria: ', error)
        }
    
    }
    if (category === 'comics'){
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380&limit=16`);
            const data = await response.json();
            products = data.results;
        } catch (error) {
            console.log('hubo un problema al traer los productos de la comiqueria: ', error)
        }
    }
    
    if (category === 'funkos' || !category){
        try{
            const productRef = collection(db, "funkos");
            const querySnapshot = await getDocs(productRef);
            querySnapshot.forEach((doc) => {
                console.log(doc)
                products.push({ ...doc.data(), id: doc.id });
            });

        } catch (error){
            console.log('error al traer los funkos: ', error)
        }
    }

    return products;
}