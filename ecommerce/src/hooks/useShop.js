import { useEffect, useMemo, useState } from "react";
import { getApiProducts } from "../services/service";

export function useShop (category, subCategory, sort){
    
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
        
    useEffect(()=>{
      setLoading(true);
      const fetchData = async () => {
        try{
          const product = await getApiProducts({ category, subCategory });
          setProducts(product);

        } catch (err) {
          console.error('Hubo problemas al traer los productos; ', err)
        }
        finally{
          setLoading(false);
          setReady(true);
        }
      }
      
      fetchData();

    }, [category, subCategory]);

    //filtro por nombre asc o desc
    const sortedProducts = useMemo (()=>{

      if(sort === 'asc'){
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      }
      else if(sort === 'desc')
      {
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      }
      else if(sort === 'mayor')
      {
        return [...products].sort((a, b) => b.price - a.price);
      }
      else if(sort === 'menor')
      {
        return [...products].sort((a, b) => a.price - b.price);
      }
      else
      {
        return products
      }
    }, [sort, products])

    return { loading, ready, products: sortedProducts }

}