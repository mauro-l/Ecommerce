import { useEffect, useMemo, useState } from "react";
import { getApiProducts } from "../services/service";
import { useLocation } from "react-router-dom";

export function useShop (category, subCategory, sort, limits){

    const location = useLocation();
    const [lastPath, setLastPath] = useState('');
    const [header, setHeader] = useState([])
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    

    useEffect(()=>{
      if(location.pathname !== lastPath)
      {  
        setLoading(true);
        const fetchData = async () => {
          try{
            const product = await getApiProducts({ 
              category, 
              subCategory, 
              limits, 
            });
            setProducts(product.products);
            setHeader(product.header);
            setLastPath(location.pathname);
          } catch (err) {
            console.error('Hubo problemas al traer los productos; ', err)
          }
          finally{
            setLoading(false);
            setReady(true);
          }
        }
      
        fetchData();
      }

    }, [category, subCategory, limits, lastPath, location.pathname]);

    //filtro por nombre asc o desc
    const sortedProducts = useMemo (()=>{
      switch (sort){
        case 'asc':
          return [...products].sort((a, b) => a.name.localeCompare(b.name))
        case 'desc':
          return [...products].sort((a, b) => b.name.localeCompare(a.name))
        case 'mayor':
          return [...products].sort((a, b) => b.price - a.price);
        case 'menor':
          return [...products].sort((a, b) => a.price - b.price);
        default:
          return products
      }      
    }, [sort, products])

    return { loading, ready, products: sortedProducts, header }

}