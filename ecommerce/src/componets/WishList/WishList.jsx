
//import components
import Banner from '../Banner/Banner'

//import context
import { useContext } from 'react'
import { WishContext } from '../../Context/WishContext'
import { CartContext } from '../../Context/CartContext'

import { Link } from 'react-router-dom'

function WishList() {

    const { fav, removeItemFav, removeAllItemFav } = useContext(WishContext)
    const { addCart, checkProductInCart, removeItemCart } = useContext(CartContext);

    if(fav.length < 1 ){
        return (

            <div className='flex flex-col items-center justify-center p-10 my-3 text-xl'>
                <h1 className='p-5'>No hay productos en Favoritos 💔</h1>
                <img src="https://finofilipino.org/wp-content/uploads/2020/01/werfqwerfwerwergh.gif" className='w-60 md:w-80' alt="momento exacto en el que se le rompe el corazon" />
            </div>
        )
    }

    return (
        <>
            <Banner greeting={'Lista de deseos'} />
            <section className="container p-8 mx-auto">
                <article className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-[#F2F4F7] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3 text-lg text-center md:text-sm">
                                    Product
                                </th>
                                <th scope="col" className="hidden px-6 py-3 text-center md:table-cell">
                                    Price
                                </th>
                                <th scope="col" className="hidden px-6 py-3 text-center md:table-cell">
                                    Stock
                                </th>
                                <th scope="col" className="hidden px-16 py-3 text-center md:table-cell">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {fav.map(prod=>(
                                <tr key={prod.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f2f4f7] dark:hover:bg-gray-600 md:table-row flex flex-col items-center">
                                    <td className="flex flex-col items-center p-2 md:p-4 md:flex-row">
                                        <button onClick={()=>removeItemFav(prod)} className='text-xl md:me-4 text-black/50 font-roboto'>
                                            X
                                        </button>
                                        <img src={prod.image} className="h-32 max-w-full max-h-full" alt="Apple Watch"/>
                                        <div className="max-w-sm px-3 py-2 text-xl font-semibold text-gray-900 text-wrap md:px-6 md:py-4 md:font-normal dark:text-white">
                                            {prod.name}
                                        </div>
                                    </td>
                                    <td className="px-3 py-2 text-lg font-semibold text-center text-gray-900 md:px-6 md:py-3 md:font-normal dark:text-white">
                                        ${prod.price}
                                    </td>
                                    <td className="px-3 py-2 md:px-6 md:py-4">
                                        {
                                            prod.stock >= 1 ?
                                            <p className="text-lg font-medium text-center text-green-600 dark:text-green-500">En Stock</p>
                                            :
                                            <p className="text-lg font-medium text-center text-red-600 dark:text-red-500">Sin Stock</p>
                                        }
                                    </td>
                                    <td className="order-5 hidden px-3 py-2 text-center md:px-6 md:py-4 md:block">
                                        {
                                            checkProductInCart(prod) ?
                                            <button onClick={()=>removeItemCart(prod)} className="py-4 font-medium text-white bg-ered px-14">Quitar del carrito</button>
                                            :
                                            <button onClick={()=>addCart(prod)} className="py-4 font-medium text-white bg-esky px-14">Agregar al carrito</button>
                                        }
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </article>
                <article className='flex flex-col items-center justify-between w-full p-4 md:flex-row'>
                    <div className='flex items-center w-full gap-2 py-1 text-lg md:w-auto md:my-5 md:text-base'>
                        <button onClick={()=>removeAllItemFav()} className='flex justify-center w-full px-10 py-2.5 text-white md:py-2 bg-esky md:text-sm'>
                            Borrar Todos
                        </button>
                    </div>
                    <div className='flex flex-col w-full text-lg md:flex-row md:w-auto md:gap-3 md:text-base'>
                        <Link to={'/shop'}>
                            <button className='bg-esky text-white my-1 py-2.5 md:py-2 md:px-6 w-full'>Ver mas productos</button>
                        </Link>
                        <Link to={'/cart'}>
                            <button className='bg-esky text-white my-1 py-2.5 md:py-2 md:px-6 w-full'>Ir al carrito</button>
                        </Link>
                    </div>
                </article>
            </section>    
        </>
    )
}

export default WishList