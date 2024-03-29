import { useCallback, useState } from 'react'
import { transformProductData } from '../helper/transformProductData';
import endpoints from '../services/api/meli.api';


export default function useFetchData() {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);


    const getProducts = useCallback(async ({ endpoint, limits }) =>{
        setLoading(true);
        
        let url;

        if(endpoint === 'comics'){
            url = endpoints.comics;
            /* url += `&category=MLA3025&applied_value_id%3D20991991`; */
        }
        if(endpoint === 'books'){
            url = endpoints.books;
        }

        if(limits !== null){
            url += `&limit=${limits}`;
        }

        try{
            const response = await fetch(url);
            const json = await response.json();
            const data = transformProductData(json.results)
            setProducts(data.product);
        } catch (error){
            console.error('error al traer los productos: ', error)
        } finally{
            setLoading(false);
            setReady(true);
        }
    }, []);
  
    return { products, getProducts, loading, ready }
}