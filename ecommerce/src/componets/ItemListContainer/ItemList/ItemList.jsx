
import Card from "/src/componets/Cards/Card"

const ItemList = ({products}) => {

  return (
    <div className="flex flex-wrap justify-center">
        {products.map(prod =>{
          let url = prod.thumbnail_id ? `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp` : null;
          return(
            <Card key={prod.id}  
                  id={prod.id} 
                  image={prod.image || null} 
                  imgML={`${url}`} 
                  category={prod.category || null} 
                  name={prod.name || null} 
                  title={prod.title || null} 
                  price={prod.price} 
                  stocks={prod.stock || null}
                  mlStock={prod.order_backend || null}
              />)}

          )
        } 
    </div>
  )
}

export default ItemList