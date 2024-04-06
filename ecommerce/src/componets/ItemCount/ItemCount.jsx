
//import { useState } from "react"
import up from '../icons/chevron-up.svg'
import down from '../icons/chevron-down.svg'

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function ItemCount(product) {

    const {addCart, subtractQuantity} = useContext(CartContext);
    
    return (
        <div className='flex flex-col items-center'>
            <div className="flex w-20 border border-stone-300">
                <p className="flex items-center justify-center px-3 text-xl text-gray-400 md:text-lg font-roboto">{product.quantity}</p>
                <div className="flex flex-col items-end w-full space-y-1 me-2 md:space-y-0">
                    <button className="text-gray-700 font-roboto" onClick={()=>addCart(product)}><img src={up} alt="chevron up" /></button>
                    <button className="text-gray-700 font-roboto" onClick={()=>subtractQuantity(product)}><img src={down} alt="chevron down" /></button>
                </div>
            </div>  
            <small className="mt-2 text-xs text-gray-400 dark:text-gray-400">Stock disponible: {product.stock}.</small>
        </div>
    )
}

export default ItemCount
