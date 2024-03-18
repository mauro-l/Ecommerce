
//import { useState } from "react"
import up from '../icons/chevron-up.svg'
import down from '../icons/chevron-down.svg'

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function ItemCount(product) {

    //const [contador, setContador] = useState(0);

    const {addCart, subtractQuantity} = useContext(CartContext);

   /*  const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    } */

    {/* <div className="flex">
        <p className="flex items-center justify-center w-16 px-5 py-2 text-xl text-gray-400 border md:text-lg font-roboto border-stone-300 md:py-0">{contador}</p>
        <div className="flex flex-col space-y-1 ms-1 md:space-y-0">
            <button className="text-white font-roboto bg-[#6FC9CD] px-2 md:h-5" onClick={incrementar}>+</button>
            <button className="text-white font-roboto bg-[#6FC9CD] px-2 md:h-6" onClick={decrementar}>-</button>
        </div>
    </div> */}
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
