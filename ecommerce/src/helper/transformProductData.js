import shortenName from "../utilities/nameUtils";

export function transformProductData(products){
    
    const mappedProducts = products.map(prod =>{
    let url = prod.thumbnail_id ? `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp` : null;
    
    const stockMeli = prod.price >= 1000 ? Math.floor(prod.price / 1000) : null;

        return({
            id : prod.id ,
            image: url || prod.image,
            category: prod.category || 'Libros, Comics y Manga',
            licence: prod.licence || null,
            name: shortenName(prod.name || prod.title),
            price: prod.price,
            stock: prod.stock || prod.stock === 0 ? prod.stock : stockMeli,
        })}
    )

    return { product : mappedProducts }

}