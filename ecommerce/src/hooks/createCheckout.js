import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../services/config";
import { getCurrentDate, getCurrentTime } from '../helper/currentDate'

export async function createCheckout (purchase, cart, clearCart, user){

    const buyerDetail = {...purchase, date: getCurrentDate() + ' ' + getCurrentTime()}

    let orderId;
    const batch = writeBatch(db);
    const outStock =[];

    if(!user){
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, buyerDetail);
        orderId = orderAdded.id;
        clearCart();
        return { orderId, buyerDetail }
    }

    try{
        const cartIds = cart.map(item=> item.id)
        const productRef = collection(db, 'funkos');
        const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', cartIds)));
    
        productsAddedFromFirestore.forEach(doc =>{
            const dataDoc = doc.data();
            const stockDB = dataDoc.stock;
            const productsAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productsAddedToCart?.quantity;
    
            if(stockDB >= prodQuantity){
                batch.update(doc.ref, {stock: stockDB - prodQuantity})
            }else{
                outStock.push({id: doc.id, ...dataDoc});
            }
        });
    
        if(outStock.length === 0){
            await batch.commit();
    
            const orderRef = collection(db, 'orders');
            const orderAdded = await addDoc(orderRef, buyerDetail);
            orderId = orderAdded.id;
            clearCart()
        }else{
            console.error('no hay stock de los siguientes productos; ', outStock);
        }
    }catch(err){
        throw new Error('Problemas al generar la orden')
    }

    return { orderId, buyerDetail }

}