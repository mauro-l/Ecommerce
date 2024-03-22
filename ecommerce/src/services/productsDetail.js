
//import { getProductsbyId } from "../asyncMock";

import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const getApiDetails = async (params) =>{

    let product = [];

    console.log('dentro de productsDetails: ', params.typeId, params.productId);
    console.log('productsDetails typeId; ', typeof typeId, params.typeId);
    console.log('productsDetails productID; ', typeof productId, params.productId);

    if(params.typeId === 'f'){
        console.log('dentro del if de funkos: ', params.typeId)
        const docRef = doc(db, 'funkos', params.productId)
        try{
            const res = await getDoc(docRef)
            console.log(res.data())
            product.push({ ...res.data(), id: res.id });
        }
        catch(err){
            console.log('error al cargar la categoria del producto', err);
        }

        return product;
    }
    /* if(typeId === 'f'){
        console.log('dentro del if de funkos: ', typeId)
        try{
            product = await getProductsbyId(productId);
        }
        catch(err){
            console.log('error al cargar la categoria del producto', err);
        }
    } */

    if(params.typeId === 'p'){
        console.log('dentro del if de products: ', params.typeId)
        try{
            const res = await fetch(`https://api.mercadolibre.com/items/${params.productId}`);
            const data = await res.json();
            product = data;
        }
        catch (err){
            console.log('error al conseguir la categoria del producto: ', err);            
        }

        return product;
    }
}