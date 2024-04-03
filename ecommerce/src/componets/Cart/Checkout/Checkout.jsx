
import { useContext } from 'react'
import Banner from '../../Banner/Banner'
import arrow from '../arrow.svg'
import { CartContext } from '/src/Context/CartContext';
import { useForm } from 'react-hook-form';

const Checkout = () => {

    const { cart, totalPrice, shipment } = useContext(CartContext);
    const { register, handleSubmit, reset } = useForm();

    console.log('valor envio; ', shipment)

    const basePrice = totalPrice();
    const finalCost = basePrice + shipment;

    const send = (data) =>{
        console.log(data)
    }

    const handleClear = () => {
        reset(); 
    }

    
    return (
        <div className="">
            <Banner greeting={'Checkout'} categoryId={'Carrito'} subcategory={'Finalizar compra'} />
            <section className='container p-10 mx-auto mt-6'>
                <ul className='flex flex-col gap-10 text-lg md:flex-row md:justify-center'>
                    <li><span className='bg-esky text-white px-3.5 py-2 me-4'>1</span>Carrito de compras</li>
                    <li className='hidden md:block'><img src={arrow} alt="" /></li>
                    <li><span className='bg-esky text-white px-3.5 py-2 me-4'>2</span>Opciones de pago y envío</li>
                    <li className='hidden md:block'><img src={arrow} alt="" /></li>
                    <li><span className='bg-black text-white px-3.5 py-2 me-4'>3</span>Resumen de compra</li>
                </ul>
            </section>
            <section className='flex flex-col justify-center w-full p-8 mx-auto md:flex-row'>
                <article className='flex flex-col w-full max-w-[600px]'>
                    <div className='md:w-9/12'>
                        <div className='flex justify-between'>
                            <h2 className='py-4 text-xl'>Datos</h2>
                            <button className='flex items-center text-gray-500' onClick={handleClear}>
                                Limpiar Formulario
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="mb-1 icon icon-tabler icons-tabler-outline icon-tabler-forms"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /><path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /><path d="M17 12h.01" /><path d="M13 12h.01" /></svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(send)}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input 
                                        type="text" 
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" " required
                                        {...register('name')}
                                    />
                                    <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Nombre</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input 
                                        type="text"
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" " required
                                        {...register('lastname')} 
                                    />
                                    <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Apellido</label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input 
                                    type="email"
                                    className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    placeholder=" " required 
                                    {...register('email')}
                                />
                                <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Email</label>
                            </div>
                            <div className={`relative z-0 w-full mb-5 group ${shipment === 0 ? 'hidden' : ''}`}>
                                <input 
                                    type="text" 
                                    className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    placeholder=" "  
                                    {...register('country')}
                                />
                                <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Ciudad</label>
                            </div>
                            <div className={`relative z-0 w-full mb-5 group ${shipment === 0 ? 'hidden' : ''}`}>
                                <input 
                                    type="text" 
                                    className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    placeholder=" "  
                                    {...register('direccion')}
                                />
                                <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Dirección</label>
                            </div>
                            <div className={`${shipment === 0 ? '' : 'grid md:grid-cols-2 md:gap-6'}`}>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input 
                                        type="tel" 
                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" " required 
                                        {...register('celular')}
                                    />
                                    <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Teléfono (123-456-7890)</label>
                                </div>
                                <div className={`relative z-0 w-full mb-5 group ${shipment === 0 ? 'hidden' : ''}`}>
                                    <input 
                                        type="text" 
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" "  
                                        {...register('code')}
                                    />
                                    <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Código postal (ZIP)</label>
                                </div>
                            </div>
                            <button className='w-full py-2 my-3 text-white border border-white disabled:cursor-not-allowed bg-esky disabled:bg-gray-600'>Cargar Datos</button>
                        </form>
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h2 className='py-4 text-xl'>Método de pago</h2>
                        <ul className="text-sm font-medium text-gray-900 border border-gray-200 sm:rounded-lg bg-tgray dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-tgray dark:border-gray-500" />
                                    <label className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">Pago en el local </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">Tarjeta de Crédito/débito</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" defaultChecked />
                                    <label htmlFor="list-radio-military" className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">MercadoPago</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className='flex flex-col md:w-1/3'>
                    <div>
                        <h2 className='py-4 text-xl'>Resumen de compra</h2>
                        <div className="relative overflow-x-auto border-2 border-gray-100 sm:rounded-lg">
                            <table className="w-full text-left text-gray-500 rtl:text-right dark:text-gray-400">
                                <tbody>
                                    {
                                        cart.map(prod =>(
                                            <tr key={prod.id} className="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" className="px-4 py-4 font-medium text-gray-900 text-wrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {prod.name}
                                                    <span className='ms-2'>x{prod.quantity}</span>
                                                </th>
                                                <td className="px-2 py-4 text-black">
                                                    ${prod.price.toLocaleString()}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Subtotal
                                        </th>
                                        <td className="px-2 py-4 text-black">
                                            ${basePrice.toLocaleString()}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Envío 
                                        </th>
                                        <td className="px-2 py-4 text-black">
                                            ${shipment.toLocaleString()}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Total
                                        </th>
                                        <td className="px-2 py-4 text-black">
                                            ${finalCost.toLocaleString()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className='w-full py-2 my-3 text-white border border-white cursor-not-allowed bg-esky disabled:bg-gray-600' disabled>COMPRAR</button>
                </article>
            </section>
        </div>
    )
}

export default Checkout