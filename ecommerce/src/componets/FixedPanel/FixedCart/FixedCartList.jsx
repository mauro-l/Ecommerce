
//import componentes
import { useContext } from "react"
import FixedCart from "./FixedCart"
import { CartContext } from "../../../Context/CartContext"

//context


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
                    { cart.map (prod =>(
                        <FixedCart 
                        key={prod.id}
                        product={prod}
                        removeToCart={()=>removeItemCart(prod)}
                        />
                    ))}
                </tbody>
            </table>
        </article>
    )
}

export default FixedCartList