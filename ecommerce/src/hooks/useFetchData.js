import { useEffect, useState } from 'react'
import { transformProductData } from '../helper/transformProductData';
import endpoints from '../services/api/meli.api';


export default function useFetchData( endpoint, initialLimit = null) {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect (()=>{

        console.log('Viene al custom hook FETCH DATA a buscar los productos')
        const getProducts = async () =>{
            
            setLoading(true);
            
            let url;
            /* let url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505&category=MLA3025` */

            if(endpoint === 'comics'){
                url = endpoints.comics;
                url += `&category=MLA3025&applied_value_id%3D20991991`;
            }
            if(endpoint === 'books'){
                url = endpoints.books;
            }

            if(initialLimit !== null){
                url += `&limit=${initialLimit}`;
            }


            try{
                const response = await fetch(url);
                const json = await response.json();
                console.log('se renderiza y aca estan los productos; ', json.results)
                const data = transformProductData(json.results)
                setProducts(data.product);
            } catch (error){
                console.error('error al traer los productos: ', error)
            } finally{
                setLoading(false);
                setReady(true);
            }
        }

        getProducts();
    }, [endpoint, initialLimit])
  
    return { products, loading, ready }
}