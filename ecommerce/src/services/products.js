
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import endpoints from "./api/meli.api";

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */

//let apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380';

export const getApiProducts = async (category) => {
    
    let products = [];
    
    
    if (category === 'funkos' || !category){
        try{
            const productRef = collection(db, "funkos");
            const querySnapshot = await getDocs(productRef);
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });

        } catch (error){
            console.log('error al traer los funkos: ', error)
        }
    }else{

        let url;        

        if (category === 'libros'){
            url = endpoints.books;        
        } 

        if (category === 'comics'){
            url = endpoints.comics;
        }

        try{
            const response = await fetch(url);
            const data = await response.json();
            products = data.results;
        } catch (error) {
            console.log('hubo un problema al traer los libritos diria mi tia: ', error)
        }
    }

    
    

    return products;
}