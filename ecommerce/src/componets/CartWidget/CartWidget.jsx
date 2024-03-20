import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export default function CartWidget({ icon }) {

    const {productsInCart} = useContext(CartContext);

    return (
      <div className='absolute flex items-center justify-center w-10 h-10 p-1 md:h-14 md:w-14'>
        <img src={icon.carrito} className='w-7' alt="carrito" />
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 pt-0.5 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -start-2 dark:border-gray-900">{productsInCart()}</div>
      </div>
    )
}
