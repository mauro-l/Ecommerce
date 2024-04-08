import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../services/config";

    // Función para obtener la fecha actual en formato 'dd/mm/yyyy'
    const getCurrentDate = () => {
        const now = new Date();
        const dia = String(now.getDate()).padStart(2, '0');
        const mes = String(now.getMonth() + 1).padStart(2, '0');
        const anio = now.getFullYear();
        return `${dia}/${mes}/${anio}`;
    };

        // Función para obtener la hora actual en formato 'hh:mm:ss'
    const getCurrentTime = () => {
        const now = new Date();
        const horas = String(now.getHours()).padStart(2, '0');
        const minutos = String(now.getMinutes()).padStart(2, '0');
        const segundos = String(now.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    };


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