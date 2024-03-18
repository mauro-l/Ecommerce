import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import CartItem from "./CartItem";


export default function CartList() {

    const {cart} = useContext(CartContext);

    //console.log('cartList: ',cart)
  return (
    <>
        {cart.map(prod =>(
            <CartItem key={prod.id} product={prod} />
        ))}
    </>
  )
}

 