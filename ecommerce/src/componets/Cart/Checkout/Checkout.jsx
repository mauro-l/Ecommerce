
//import components
import Banner from '../../Banner/Banner'

//import react functions
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
    
//import misc & utilities
import { alertModal } from '/src/utilities/ToastyText';
import arrow from '../arrow.svg'
import Swal from 'sweetalert2';

//import context
import { CartContext } from '/src/Context/CartContext';
import { createCheckout } from '/src/hooks/createCheckout';
import { authContext } from '/src/Context/AuthContext';

const Checkout = () => {

    const { cart, totalPrice, clearCart, shipment } = useContext(CartContext);
    const { user, check } = useContext(authContext)
    const { register, handleSubmit, reset } = useForm();

    const [selectedOption, setSelectedOption] = useState('Mercadopago');
    const [isFormEmpty, setIsFormEmpty] = useState(true);
    const [data, setData] = useState({orderId: null, buyerDetails: null, orderGenerated: false})
    const [loading, setLoading] = useState(null);

    const basePrice = totalPrice();
    const finalCost = basePrice + shipment;

    let shippingType = shipment === 2000 ? 'Envio a domicilio' : shipment === 100 ? 'Retiro en correo' : 'Retiro en local';

    const handleClear = () => {
        reset(); 
        setIsFormEmpty(true)
    }

    const defaultValues = {
        email: user?.email || ''
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsFormEmpty(false);
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const purchase = (data) =>{
        const order = {
            client: data,
            products: cart,
            shipment: shippingType,
            payment: selectedOption,
            total: finalCost,
        }
        return order;
    }

    const finalizingAlerts = (checkoutId, purchaseDetail) => {
        Swal.fire({
            title: "Compra realizada con éxito!",
            text: "A continuación podrá ver los detalles de su compra o pulse Salir para volver.",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#6FC9CD",
            cancelButtonColor: "#000",
            confirmButtonText: "Ver detalles",
            cancelButtonText: "Volver",
            footer: checkoutId,
            allowOutsideClick: false 
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Detalles del pedido',
                    html:
                        `
                            <div style="font-family: 'Roboto, sans-serif'">
                                <p><strong>Cliente:</strong></p>
                                <ul>
                                    <li>
                                        <p><strong>Nombre:</strong> ${purchaseDetail.client.name}</p>
                                        <p><strong>Apellido:</strong> ${purchaseDetail.client.lastname}</p>
                                        <p><strong>Email:</strong> ${purchaseDetail.client.email}</p>
                                        <p><strong>Hora de compra:</strong> ${purchaseDetail.date}</p>
                                    </li>
                                </ul>
                                <p><strong>Productos:</strong></p>
                                <ul>
                                    ${purchaseDetail.products.map(prod => `
                                    <li>
                                        <p><strong>Nombre:</strong> ${prod.name}</p>
                                        <p><strong>Precio:</strong> $${prod.price.toLocaleString()}</p>
                                        <p><strong>Cantidad:</strong> ${prod.quantity}</p>
                                    </li>
                                    `).join('')}
                                </ul>
                                <p><strong>Tipo de envío:</strong> ${purchaseDetail.shipment}</p>
                                <p><strong>Método de pago:</strong> ${purchaseDetail.payment}</p>
                                <p><strong>Total:</strong> $${purchaseDetail.total.toLocaleString()}</p>
                            </div>
                        `,
                    showCancelButton: false,
                    confirmButtonColor: "#6FC9CD",
                    confirmButtonText: "OK",
                    allowOutsideClick: false
                }).then(() => {
                    window.location.href = "/about";
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.href = "/about";
            }
        });
    }
    
    const submit = async (data) => {
        const buyer = purchase(data);
        setLoading(true); 
        setData(prevData => ({
            ...prevData,
            orderGenerated: true,
        }));
        try {
            const { orderId, buyerDetail } = await createCheckout(buyer, cart, clearCart, user);
            setData(prevData => ({
                ...prevData,
                orderId: orderId, 
                buyerDetails: buyerDetail
            }));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    if(loading && data.orderGenerated){
        alertModal(loading, data.orderId)
    }
    if(data.orderGenerated && !loading && data.orderId){
        finalizingAlerts(data.orderId, data.buyerDetails)
    }
    if(data.orderGenerated && !loading && !data.orderId){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Problemas al concretar la compra."
        });
    }
    
    return (
        <div className="">
            <Banner greeting={'Checkout'} categoryId={'Carrito'} subcategory={'Finalizar compra'} />
            <section className='container p-10 mx-auto mt-6'>
                <ul className='flex flex-col gap-10 text-lg lg:flex-row lg:justify-center'>
                    <li><span className='bg-esky text-white px-3.5 py-2 me-4'>1</span>Carrito de compras</li>
                    <li className='hidden lg:block'><img src={arrow} alt="" /></li>
                    <li><span className='bg-esky text-white px-3.5 py-2 me-4'>2</span>Opciones de pago y envío</li>
                    <li className='hidden lg:block'><img src={arrow} alt="" /></li>
                    <li><span className='bg-black text-white px-3.5 py-2 me-4'>3</span>Resumen de compra</li>
                </ul>
            </section>
            <section className='flex flex-col justify-center w-full p-8 mx-auto lg:flex-row'>
                <article className='flex flex-col lg:w-1/3'>
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
                    <div className=''>
                        <h2 className='py-4 text-xl'>Método de pago</h2>
                        <ul className="text-sm font-medium text-gray-900 border border-gray-200 sm:rounded-lg bg-tgray dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className={`w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${shipment !== 0 ? 'hidden' : ''}`}>
                                <div className="flex items-center ps-3">
                                    <input type="radio" value="Pago en el local" id="pagoLocal" name="paymentMethod" onChange={handleOptionChange} disabled={shipment!==0} className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-tgray dark:border-gray-500" />
                                    <label htmlFor='pagoLocal' className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">Pago en el local </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input type="radio" value="Pago con tarjeta" id="pagoTarjeta" name="paymentMethod" onChange={handleOptionChange} className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor='pagoTarjeta' className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">Tarjeta de Crédito/débito</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input type="radio" value="Mercadopago" id="mercadopago" name="paymentMethod"  onChange={handleOptionChange} defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 bg-tgray focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor='mercadopago' className="w-full py-3 text-base font-medium text-gray-900 ms-2 bg-tgray dark:text-gray-300">MercadoPago</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className='flex flex-col lg:items-end w-full lg:max-w-[600px]'>
                    <div className='lg:w-9/12'>
                        <div className='flex justify-between'>
                            <h2 className='py-4 text-xl'>Datos</h2>
                            <button className='flex items-center text-gray-500' onClick={handleClear} disabled={isFormEmpty}>
                                Limpiar Formulario
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="mb-1 icon icon-tabler icons-tabler-outline icon-tabler-forms"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /><path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /><path d="M17 12h.01" /><path d="M13 12h.01" /></svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="grid lg:grid-cols-2 lg:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input 
                                        type="text" 
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" " required
                                        onKeyDown={handleKeyDown}
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
                                        onKeyDown={handleKeyDown}
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
                                    defaultValue={check ? defaultValues.email : ''}
                                    onKeyDown={handleKeyDown}
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
                                    onKeyDown={handleKeyDown}
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
                                    onKeyDown={handleKeyDown}
                                    {...register('direccion')}
                                />
                                <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Dirección</label>
                            </div>
                            <div className={`${shipment === 0 ? '' : 'grid lg:grid-cols-2 lg:gap-6'}`}>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input 
                                        type="tel" 
                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
                                        className="font-roboto block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder=" " required 
                                        onKeyDown={handleKeyDown}
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
                                        onKeyDown={handleKeyDown}
                                        {...register('code')}
                                    />
                                    <label className="peer-focus:font-medium mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Código postal (ZIP)</label>
                                </div>
                            </div>
                            <button className='w-full py-2 my-3 text-white border border-white disabled:cursor-not-allowed bg-esky disabled:bg-gray-600'>Finalizar compra</button>
                        </form>
                    </div>
                    
                </article>
                
            </section>
        </div>
    )
}

export default Checkout