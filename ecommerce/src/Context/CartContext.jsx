import { createContext, useEffect, useState } from "react";
import { ToastyText } from "../utilities/ToastyText";

export const CartContext = createContext();

const cartInit = JSON.parse(localStorage.getItem('cart')) || [];

export function CartProvider ({ children }){

    const [cart, setCart] = useState(cartInit);
    const [shipment, setShipmet] = useState(0);

    useEffect (()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const checkProductInCart = (product) =>{ 
        return cart.some(prod => prod.id === product.id); 
    }
    
    const subtractQuantity = (product) => {

        const productIndex = cart.findIndex(item => item.id === product.id);

        if(productIndex !== -1 && cart[productIndex].quantity > 1){

        const updateCart = [...cart];
        updateCart[productIndex].quantity -= 1;
        setCart(updateCart);
        }
    }

    
    const addCart = (product) =>{
        const productIndex = cart.findIndex(item => item.id === product.id);
        
        const stockAvailable = product.stock - (productIndex >= 0 ? cart[productIndex].quantity : 0);
        
        if(stockAvailable == 0){
            ToastyText ('La cantidad seleccionada supera el stock disponible.')
        }

        if(productIndex >= 0 && cart[productIndex].quantity < product.stock){
            const newCart = [...cart];
            newCart[productIndex].quantity += 1
            return setCart(newCart)
        }

        if(productIndex === -1){
            setCart(prevState =>([
                ...prevState,{
                ...product,
                quantity: 1
                }
            ]));
        }
    }

    const productsInCart = () =>{
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const totalPrice = () =>{
        return cart.reduce ((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const removeItemCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id));
    }

    const clearCart = () =>{
        setCart([]);
    }

    return(
        <CartContext.Provider 
            value={
                {
                cart, 
                setCart, 
                addCart, 
                checkProductInCart, 
                productsInCart,
                totalPrice,
                removeItemCart, 
                subtractQuantity, 
                clearCart, 
                shipment, 
                setShipmet
                }
            }>
            {children}
        </CartContext.Provider>
    )

}