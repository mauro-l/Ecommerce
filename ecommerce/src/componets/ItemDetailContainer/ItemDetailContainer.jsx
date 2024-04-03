
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getApiDetails } from "../../services/productsDetail";
import LoadingCard from "../Cards/LoadingCard";

const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(()=>{

    const fetchData = async () =>{
      try{
        const response = await getApiDetails(params)
        if(response){
          setProducts(response);
          setIsLoading(true);
        }else{console.log('no hubo respuesta', response)}
      }catch (err) {console.log('Hubo un problema al renderizar el producto; ', err)}
    }
    fetchData()

  }, [params])


  return (
    <div>
      {!isLoading ?
        <LoadingCard/>
        :
        <ItemDetail product={product[0]}/>
      }
    </div>
  )
}

export default ItemDetailContainer