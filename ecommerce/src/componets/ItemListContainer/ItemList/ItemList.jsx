
import Card from "/src/componets/Cards/Card"

const ItemList = ({products}) => {

  {/* <Card key={prod.id}  
                  id={prod.id} 
                  image={prod.image || null} 
                  imgML={`${url}`} 
                  category={prod.category || null} 
                  name={prod.name || null} 
                  title={prod.title || null} 
                  price={prod.price} 
                  stocks={prod.stock || null}
                  mlStock={prod.order_backend || null}
              /> */}

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