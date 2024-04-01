
//import ItemCount from '../../ItemCount/ItemCount'
import example from '../../../assets/example.jpg'
import addCartSvg from '../../icons/shopping-cart-plus.svg'
import removeCartSvg from '../../icons/shopping-cart-remove.svg'
import StartRating from '../../Starts/StartRating'
import mini from './pagosImg'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import { WishContext } from '../../../Context/WishContext'
import { SuggestContext } from '../../../Context/SuggestContext'

const ItemDetail = ({ product }) => {
    
    const { addCart, checkProductInCart, removeItemCart } = useContext(CartContext);
    const { addFav, removeItemFav, checkProductInFav } = useContext(WishContext)
    const { relatedCyM } = useContext(SuggestContext);

    console.log('ITEM DETAAAILL; ', relatedCyM.current)

    return (
        <div className='container p-4 mx-auto space-y-4 md:p-6'>
            <section className='flex flex-col mx-auto my-5 md:items-center md:flex-row px-14 md:justify-between md:gap-4'>
                <picture className='lg:w-3/4'><img src={product.image} className='md:h-[450px] flex mx-auto py-2' alt={product.name} /></picture>
                <article className='flex flex-col items-center justify-start py-3 mx-2 md:w-1/2'>
                    <div className='lg:ms-8'>
                        <div>
                            <p className='text-[#797C7F]'>{product.category}s</p>
                            <h2 className='text-3xl md:max-w-md'>{product.name}</h2>
                            <h3 className='my-1 text-gray-400 font-roboto'>{product.licence}</h3>
                            <div className='flex items-center gap-2'>
                                <p className='text-2xl me-3'>${product.price}</p>
                                <StartRating/>
                            </div>
                        </div>
                        <div className='flex flex-wrap items-center content-center gap-3 my-5'>
                            <>
                                {
                                    checkProductInCart(product) ?
                                    <button 
                                        onClick={()=>removeItemCart(product)} 
                                        className={`flex px-5 text-nowrap py-3 text-center text-white bg-ered md:text-lg md:py-2 md:px-5`}
                                    >
                                        <img src={removeCartSvg} className="md:me-2 md:h-6" alt="iconCart" />QUITAR DEL CARRITO
                                    </button>
                                    :
                                    <button 
                                        onClick={()=>addCart(product)} 
                                        className={`flex px-5 text-nowrap py-3 text-center text-white bg-black md:text-lg md:py-2 md:px-5`}
                                    >                                        
                                        <img src={addCartSvg} className="md:me-2 md:h-6" alt="iconCart" />
                                        Agregar al carrito
                                    </button>
                                }
                                
                            </>
                            <>
                                {
                                    checkProductInFav(product) ?
                                    <button onClick={()=> removeItemFav(product)} className='p-2 text-red-600 border rounded shadow border-stone-300 md:p-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" fill="red" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                    </button>
                                    :
                                    <button onClick={()=>addFav(product)} className='p-2 text-red-600 border rounded shadow border-stone-300 md:p-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                    </button>
                                }
                            </>
                        </div>
                        <div className='py-3'>
                            <p className='text-lg'>Metodos de pago</p>
                            <ul className='flex my-2 space-x-2'>
                                <li><img src={mini.pago1} className='border rounded shadow border-stone-300' alt="img checkout" /></li>
                                <li><img src={mini.pago2} className='border rounded shadow border-stone-300' alt="img checkout" /></li>
                                <li><img src={mini.pago3} className='border rounded shadow border-stone-300' alt="img checkout" /></li>
                                <li><img src={mini.pago4} className='border rounded shadow border-stone-300' alt="img checkout" /></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-lg'>
                                <li>Genero: <span className='text-base text-gray-500/75 font-roboto'>Shonen</span></li>
                                <li>Stock: <span className='text-base text-gray-500/75 font-roboto'>{product.stock}</span></li>
                                <li>Tags: <span className='text-base text-gray-500/75 font-roboto'>Aventura, Comedia</span></li>
                                <li>Estado: <span className='text-base text-gray-500/75 font-roboto'>En emision</span></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <section className='px-12 py-4'>
                <h2 className='text-2xl'>Caracteristicas</h2>
                <div><p className='font-roboto text-gray-500/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio consequatur ipsum dignissimos maiores sapiente velit aperiam, molestias cupiditate mollitia eligendi expedita laudantium, ut animi? Fuga ipsam distinctio neque temporibus totam!</p></div>
            </section>
            <section className='px-12'>
                <p className='text-2xl'>Productos Relacionados</p>
                <figure className='flex flex-col gap-3 text-xl md:flex-row'>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-lg text-gray-400'>US$30.00</p></a>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-lg text-gray-400'>US$30.00</p></a>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-lg text-gray-400'>US$30.00</p></a>
                </figure>
            </section>
        </div>
    )
}

export default ItemDetail