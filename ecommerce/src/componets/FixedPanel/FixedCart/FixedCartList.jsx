
//import assets
import emptyGif from '../../../assets/products/tenor.gif'

//import componentes
import FixedCart from "./FixedCart"

//context
import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"



function FixedCartList() {

    const { cart, removeItemCart } = useContext(CartContext)

    return (
        <article className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-tgray dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3 text-base text-center md:text-sm">
                            Product
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {   cart.length > 0 ?
                        cart.map (prod =>(
                        <FixedCart 
                        key={prod.id}
                        product={prod}
                        removeToCart={()=>removeItemCart(prod)}
                        />
                        )) :
                            <tr>
                                <td className='flex justify-center'>
                                    <img src={emptyGif} className='p-2 h-36' alt="no hay nada no existe" />
                                </td>
                            </tr>
                }
                </tbody>
            </table>
        </article>
    )
}

export default FixedCartList