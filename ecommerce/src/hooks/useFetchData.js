import { useCallback, useState } from 'react'
import { getApiProducts } from '../services/products';


export default function useFetchData() {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);


    const getProducts = useCallback(async ({ category, limits }) =>{

        console.log('hook; ', category, 'limites: ', limits)

        try{
            setLoading(true);
            const newProducts = await getApiProducts({ category, limits });
            setProducts(newProducts)

        } catch (error){
            console.error('error al traer los productos: ', error)
        } finally{
            setLoading(false);
            setReady(true);
        }
    }, []);

    
  
    return { products, getProducts, loading, ready }
}