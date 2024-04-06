
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { transformProductData } from "../helper/transformProductData";

export const getApiDetails = async (params) =>{
    console.log('asdfsdfa, ', params)

    let product = [];

    if(params.typeId === 'f'){
        const docRef = doc(db, 'funkos', params.productId)
        try{
            const funkosProducts = [];
            const res = await getDoc(docRef)
            funkosProducts.push({ ...res.data(), id: res.id });
            product = transformProductData(funkosProducts).product
        }
        catch(err){
            console.log('error al cargar la categoria del producto', err);
        }

        return product;
    }

    if(params.typeId === 'p'){
        console.log('dentro del if de products: ', params.typeId)
        try{
            const productsMeli = [];
            const res = await fetch(`https://api.mercadolibre.com/items/${params.productId}`);
            const data = await res.json();
            productsMeli.push({...data})
            product = transformProductData(productsMeli).product;
        }
        catch (err){
            console.log('error al conseguir la categoria del producto: ', err);            
        }

        return product;
    }
}