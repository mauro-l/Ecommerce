
import Card from "/src/componets/Cards/Card"
import empty from '/src/assets/titan.jpg'

const ItemList = ({products}) => {

  if(products.length === 0){
    return(
      <>
        <img src={empty} className="relative object-cover w-3/4 mx-auto my-5 rounded-md" alt="notProductsSorry" />
        <h1 className="absolute left-0 right-0 mx-auto text-2xl text-center text-white uppercase select-none md:text-5xl top-1/2">No hay productos!!</h1>
      </>
    )
  }
  
  return (
    <div className="flex flex-wrap justify-center">
        {products.map(prod =>{
          return( 
            <Card key={prod.id} {...prod} />
            )}
          )
        } 
    </div>
  )
}

export default ItemList