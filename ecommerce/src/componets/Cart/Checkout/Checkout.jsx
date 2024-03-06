
import Banner from '../../Banner/Banner'
import arrow from '../arrow.svg'

const Checkout = () => {
  return (
    <div className="">
        <Banner greeting={'Checkout'} />
        <section className='container p-10 mt-6'>
            <ul className='flex flex-col md:flex-row md:justify-center gap-10 text-lg'>
                <li><span className='bg-esky text-white px-3.5 py-2 me-4'>1</span>Carrito de compras</li>
                <li className='md:block hidden'><img src={arrow} alt="" /></li>
                <li><span className='bg-esky text-white px-3.5 py-2 me-4'>2</span>Opciones de pago y envio</li>
                <li className='hidden md:block'><img src={arrow} alt="" /></li>
                <li><span className='bg-black text-white px-3.5 py-2 me-4'>3</span>Resumen de compra</li>
            </ul>
        </section>
        <section className='w-full mx-auto p-8 flex flex-col md:flex-row justify-center'>
            <article className='flex flex-col w-full max-w-[600px]'>
                <div className='md:w-9/12'>
                    <h2 className='py-4 text-xl'>Datos</h2>
                    <form className="">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country & Province</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="street_address" id="floating_street_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_street_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street addres</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_postal_code" id="floating_postal_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_postal_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code (ZIP)</label>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
            <article className='flex flex-col md:w-1/3'>
                <div>
                    <h2 className='py-4 text-xl'>Resumen de compra</h2>
                    <div className="relative overflow-x-auto border-2 border-gray-100 sm:rounded-lg">
                        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Alice in borderland - 1:40, Ebook
                                        <span className='ms-2'>x2</span>
                                    </th>
                                    <td className="px-2 py-4 text-black">
                                        $92
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        The promised neverland - 1:30, Ebook
                                        <span className='ms-2'>x1</span>
                                    </th>
                                    <td className="px-2 py-4 text-black">
                                        $53
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Subtotal
                                    </th>
                                    <td className="px-2 py-4 text-black">
                                        $145.00
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Shipping
                                    </th>
                                    <td className="px-2 py-4 text-black">
                                        $50
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Total
                                    </th>
                                    <td className="px-2 py-4 text-black">
                                        $195.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h2 className='py-4 text-xl'>Metodo de pago</h2>
                    <ul className="text-sm font-medium text-gray-900 bg-tgray border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-tgray border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-tgray dark:border-gray-500" />
                                <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-base bg-tgray font-medium text-gray-900 dark:text-gray-300">Pago en el local </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-tgray border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="list-radio-id" className="w-full py-3 ms-2 text-base bg-tgray font-medium text-gray-900 dark:text-gray-300">Tarjeta de Credito/debito</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-tgray border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" defaultChecked />
                                <label htmlFor="list-radio-military" className="w-full py-3 ms-2 text-base bg-tgray font-medium text-gray-900 dark:text-gray-300">MercadoPago</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='bg-esky py-2 w-full text-white my-3 border border-white'>COMPRAR</button>
            </article>
        </section>
    </div>
  )
}

export default Checkout