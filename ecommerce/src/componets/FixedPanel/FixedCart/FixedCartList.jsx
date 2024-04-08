
//import assets
import emptyGif from '../../../assets/products/tenor.gif'
import cat from '/src/assets/laught.png'

//import componentes
import FixedCart from "./FixedCart"

//context
import { useContext } from "react"
import { CartContext } from "/src/Context/CartContext"
import { WishContext } from '/src/Context/WishContext';



function FixedCartList({ content, name, cerrarModal, asideContent }) {

    const { cart, removeItemCart } = useContext(CartContext);
    const { fav, removeItemFav } = useContext(WishContext);

    const itemContent = content === 'fav' ? fav : cart;
    const removeItemContent = content === 'fav' ? removeItemFav : removeItemCart;

    

    if(content === 'descuentos'){
        return(
            <article className="relative overflow-x-auto sm:rounded-lg">
                <h2 className='p-3 mt-5 text-center'>Se terminó el verano, por lo tanto, se terminaron los descuentos</h2>
                <img src={cat} alt="meme de gatitos" className='p-6 mx-auto' />
            </article>
        )
    }
    
    return (
        <article className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-tgray dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3 text-base text-center md:text-sm">
                            Productos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {   itemContent.length > 0 ?
                        itemContent.map (prod =>(
                        <FixedCart 
                        key={prod.id}
                        product={prod}
                        name={name}
                        cerrarModal={()=>cerrarModal()}
                        asideContent={asideContent}
                        remove={()=>removeItemContent(prod)}
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