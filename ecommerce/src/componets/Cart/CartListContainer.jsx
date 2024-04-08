
//import components
import Banner from '../Banner/Banner';
import CartList from './CartList/CartList';

//import misc
import arrow from './arrow.svg'
import empty from '../../assets/empty.png'

//import react functions
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { authContext } from '../../Context/AuthContext';

export default function CartListContainer() {

    const { clearCart, cart, totalPrice, setShipmet } = useContext(CartContext);

    const [shippingMethod, setShippingMethod] = useState('retiro');
    const { user, check, setCheck } = useContext(authContext);

    const shippingCost = {
        retiro: 0,
        domicilio: 2000,
        correo: 1000,
    };

    const handleShippingChange = (event)=>{
        setShippingMethod(event.target.value);
    }

    const basePrice = totalPrice();
    const finalCost = basePrice + shippingCost[shippingMethod];

    const handleCheckbox = (event) =>{
        setCheck(event.target.checked)
    }

  return (
    <>
        <Banner greeting={'Carrito'} />
        <section className='p-10 mt-6'>
            <ul className='flex flex-col gap-10 text-lg md:flex-row md:justify-center'>
                <li><span className='bg-esky text-white px-3.5 py-2 me-4'>1</span>Carrito de compras</li>
                <li className='hidden md:block'><img src={arrow} alt="" /></li>
                <li><span className='bg-black text-white px-3.5 py-2 me-4'>2</span>Opciones de pago y envio</li>
                <li className='hidden md:block'><img src={arrow} alt="" /></li>
                <li><span className='bg-black text-white px-3.5 py-2 me-4'>3</span>Resumen de compra</li>
            </ul>
        </section>
        <section className="container p-8 mx-auto">
            <article className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-tgray dark:bg-gray-700 dark:text-gray-400">
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
                                Subtotal
                            </th>
                            <th scope="col" className="hidden px-16 py-3 text-center md:table-cell">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            cart.length > 0 ? 
                            <CartList /> 
                            : 
                            <tr>
                                <td className='hidden md:table-cell'></td>
                                <td className='hidden md:table-cell'></td>
                                <td className='flex md:justify-center'>
                                    <img src={empty} className='p-2 h-36' alt="no hay nada no existe" />
                                    <p className='my-auto text-3xl text-black'>Carrito vacio!</p>
                                </td>
                            </tr>
                        }
                    </tbody>                    
                </table>
            </article>
            <article className='flex flex-col items-center justify-between w-full p-4 md:flex-row'>
                <div className='w-full mb-1 md:w-2/5 md:mb-0'>
                    <form>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Hola</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ticket" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 5l0 2" /><path d="M15 11l0 2" /><path d="M15 17l0 2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-4 text-sm text-gray-900 bg-transparent border border-gray-300 md:py-2 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-500 focus:border-gray-500" placeholder="Codigo descuento" required />
                            <button type="submit" className="absolute end-2 bottom-2.5 md:bottom-0 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-4 py-2 border-l border-gray-300">Apply cupon</button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col w-full text-lg md:flex-row md:w-auto md:gap-3 md:text-base'>
                    <Link to={'/shop'} className='bg-tgray text-center my-1 py-2.5 md:py-2 md:px-6'>Continuar comprando</Link>
                    {/* <Link to={'/shop'}><button className='bg-tgray my-1 py-2.5 md:py-2 md:px-6'>Continuar comprando</button></Link> */}
                    <button onClick={clearCart} className='inline-flex justify-center gap-2 bg-black text-white my-1 py-2.5 md:py-2 md:px-6'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        Vaciar carrito
                    </button>
                </div>
            </article>
        </section>
        <section className="container px-10 mx-auto md:flex md:justify-end">
            <article className='mb-12 md:w-2/5'>
                <h2 className='py-4 text-xl'>Cart Total</h2>
                <div className="relative overflow-x-auto border-2 border-gray-100 sm:rounded-lg">
                    <table className="w-full text-left text-gray-500 rtl:text-right dark:text-gray-400">
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Subtotal
                                </th>
                                <td className="px-6 py-4 text-black">
                                    ${basePrice.toLocaleString()}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Shipping
                                </th>
                                <td className="px-1 py-4 text-black font-roboto">
                                    <select name="envios" value={shippingMethod} onChange={handleShippingChange} className='text-sm font-medium md:text-base md:font-normal border-gray-100/5'>
                                        <option value="retiro">Retiro en tienda</option>
                                        <option value="domicilio">Envio a domicilio - $2000</option>
                                        <option value="correo">Retiro en correo - $1000</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Total
                                </th>
                                <td className="px-6 py-4 text-black">
                                    ${finalCost.toLocaleString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`mt-4 text-gray-500 font-roboto ${user ? '' : 'hidden'}`}>
                    <input type="checkbox" name="auth" checked={check} onChange={handleCheckbox} className='mb-1 rounded me-2' />
                    Continuar compra como user
                </div>
                <Link to={'/cart/checkout'} onClick={()=>setShipmet(shippingCost[shippingMethod])}>
                    <button className='w-full py-2 my-3 text-white border border-white bg-esky'>Continuar con el pago</button>
                </Link>
            </article>
        </section>
    </>
  )
}
