import { useEffect, useState } from "react"
//import { getProductsbyId } from "../../asyncMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getApiDetails } from "../../services/productsDetail";

const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { typeId, productId } = useParams();

  console.log( 'TIPOOO:', typeId, productId);
  console.log('typeId; ', typeof typeId, typeId);
  console.log('productID; ', typeof productId, productId);

  useEffect(()=>{

    const fetchData = async () =>{
      try{
        const response = await getApiDetails({typeId, productId})
        if(response){
          setProducts(response);
          setIsLoading(true);
        }else{console.log('no hubo respuesta', response)}
      }catch (err) {console.log('Hubo un problema al renderizar el producto; ', err)}
    }
    fetchData()

  }, [productId])


  return (
    <div>
      {isLoading &&(
        <ItemDetail {...product}/>
      )}
    </div>
  )
}

export default ItemDetailContainer