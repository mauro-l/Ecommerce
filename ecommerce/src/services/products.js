
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

import { getProducts } from "../asyncMock";

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */

//let apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380';

export const getApiProducts = async (category) => {
    
    let products = [];
    
    if (category === 'libros'){
        try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505&limit=16`);
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
            products = await getProducts();
        } catch (error){
            console.log('error al cargar los funkos: ', error)
        }
    }

    return products;
}