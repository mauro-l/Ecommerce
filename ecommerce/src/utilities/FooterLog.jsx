import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
//import { WishContext } from "../Context/WishContext"

 export function FooterLog() {

    const { cart } = useContext(CartContext)
    const [isClick, setIsClick] = useState(true)

    function opened (){
        setIsClick(!isClick)
    }

    return (
    <>
     <button onClick={opened} className='fixed bottom-0 z-50 p-3'>
        <h1  className={`py-1.5 px-4 text-white bg-blue-600 border-black rounded-full font-roboto`}>i</h1>
     </button>
        <div className={` fixed bottom-0 z-50 p-3 m-3 ms-10 text-sm w-1/3 text-white font-roboto left-3 bg-black/50 transition-transform ${isClick ? 'block' : 'hidden'}`}>
            {
                JSON.stringify(cart, null, 2)
            }
        </div>
    
    </>
   )
 }
 