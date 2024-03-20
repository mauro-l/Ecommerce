
import { getProductsbyId } from "../asyncMock";

export const getApiDetails = async ({typeId, productId }) =>{

    let product = [];

    console.log('dentro de productsDetails: ', typeId, productId);
    console.log('productsDetails typeId; ', typeof typeId, typeId);
    console.log('productsDetails productID; ', typeof productId, productId);

    if(typeId === 'f'){
        console.log('dentro del if de funkos: ', typeId)
        try{
            product = await getProductsbyId(productId);
        }
        catch(err){
            console.log('error al cargar la categoria del producto', err);
        }
    }

    if(typeId === 'p'){
        console.log('dentro del if de products: ', typeId)
        try{
            const res = await fetch(`https://api.mercadolibre.com/items/${productId}`);
            const data = await res.json();
            product = data;
        }
        catch (err){
            console.log('error al conseguir la categoria del producto: ', err);            
        }

        return product;
    }
}