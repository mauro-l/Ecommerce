
//misc
import notFound from '/src/assets/efe.webp'

//import components
import ItemDetail from "./ItemDetail/ItemDetail";
import LoadingCard from "../Cards/LoadingCard";

//import react functions
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

//import service
import { getApiDetails } from "../../services/productsDetail";

const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const params = useParams();

  useEffect(()=>{

    const fetchData = async () =>{
      try{
        const response = await getApiDetails(params)
        if(response){
          setProducts(response);
          setIsLoading(true);
        }else{
          console.log('no hubo respuesta', response)
        }
      }catch (err) {
        setError(err)
        console.error('Hubo un problema al traer el producto');
      }
    }
    fetchData()

  }, [params])

  if(error){
    return(
      <div className='flex flex-col w-full md:flex-row-reverse'>
        <h1 className='content-center p-4 mt-5 text-2xl text-center md:w-2/3 md:text-3xl text-wrap'>El producto solicitado no existe o no se encuentra disponible</h1>
        <img src={notFound} alt="image not found" className='mx-auto md:mx-1 rounded-xl w-60 md:w-1/3' />
      </div>
    )
  }


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