import { useEffect, useMemo, useState } from "react";
import { getApiProducts } from "../services/products";

export function useShop (category, sort){
    
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
        
    useEffect(()=>{
      setLoading(true);
      const fetchData = async () => {
        try{
          const product = await getApiProducts({ category });
          setProducts(product);

        } catch (err) {
          console.error('Hubo problemas al traer los productos; ', err)
        }
        finally{
          setLoading(false);
        }
      }
      
      fetchData();

    }, [category]);

    //filtro por nombre asc o desc
    const sortedProducts = useMemo (()=>{

      if(sort === 'asc'){
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      }
      else if(sort === 'desc')
      {
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      }
      else
      {
        return products
      }
    }, [sort, products])

    return { loading, products: sortedProducts }

}