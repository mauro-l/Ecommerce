import shortenName from "../utilities/nameUtils";

export function transformProductData(products){
    console.log('forematepoo; ', products)
    const mappedProducts = products.map(prod =>{
    let url = prod.thumbnail_id ? `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp` : null;
    
    const itemNameUrl = shortenName(prod.name, prod.title);
    const randomNumber = Math.ceil(Math.random() * 18);

        return({
            id : prod.id ,
            image: url || prod.image,
            category: prod.category || 'Libros, Comics y Manga',
            licence: prod.licence || null,
            name: prod.name || prod.title,
            url: itemNameUrl,
            price: prod.price.toLocaleString(),
            stock: prod.stock || randomNumber,
        })}
    )

    return { product : mappedProducts }

}