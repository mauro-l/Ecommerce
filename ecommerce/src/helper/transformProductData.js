import shortenName from "../utilities/nameUtils";

export function transformProductData(products){

    const mappedProducts = products.map(prod =>{
    let url = prod.thumbnail_id ? `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp` : null;
    
    const itemNameUrl = shortenName(prod.name, prod.title);

        return({
            id : prod.id ,
            image: url || prod.image,
            category: prod.category || null,
            name: prod.name || prod.title,
            url: itemNameUrl,
            price: prod.price,
            stock: prod.stock || prod.order_backend,
        })}
    )

    return { product : mappedProducts }

}