
//import assets
import example from '../../../assets/example.jpg'
import addCartSvg from '../../icons/shopping-cart-plus.svg'
import removeCartSvg from '../../icons/shopping-cart-remove.svg'
import mini from './pagosImg'

//import components y context
import StartRating from '../../Starts/StartRating'
import { CartContext } from '../../../Context/CartContext'
import { WishContext } from '../../../Context/WishContext'
import { SuggestContext } from '../../../Context/SuggestContext'

//import React functions
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const ItemDetail = ({ product }) => {
    
    const { addCart, checkProductInCart, removeItemCart } = useContext(CartContext);
    const { addFav, removeItemFav, checkProductInFav } = useContext(WishContext)
    const { relatedCyM, relatedLibros, relatedFunkos } = useContext(SuggestContext);

    const { subCategory } = useParams();
    const [recommended, setRecommended] = useState([])

    let subcategory = subCategory;

    if(!subCategory | subCategory === 'libros'){
        subcategory = 'Libros';
    }else if(subCategory === 'comicsymangas'){
        subcategory = 'Comics y Mangas'
    }
    
    useEffect(()=>{
        let currentRecommendation = [];
        if (subCategory === 'comicsymangas') {
            currentRecommendation = relatedCyM.current || [];
        } else if (subCategory === 'funkos') {
            currentRecommendation = relatedFunkos.current || [];
        } else {
            currentRecommendation = relatedLibros.current || [];
        }
        setRecommended(currentRecommendation);
        // eslint-disable-next-line
    }, [subCategory])

    return (
        <div className='container p-4 mx-auto space-y-4 md:p-6'>
            <section className='flex flex-col mx-auto my-5 md:items-center md:flex-row px-14 md:justify-between md:gap-4'>
                <picture className='lg:w-3/4'>
                    <img src={product.image} className='md:h-[450px] flex mx-auto py-2' alt={product.name} />
                </picture>
                <article className='flex flex-col items-center justify-start py-3 mx-2 md:w-1/2'>
                    <div className='lg:ms-8'>
                        <div>
                            <p className='text-[#797C7F]'>{product.category}s</p>
                            <h2 className='text-3xl md:max-w-md'>{product.name}</h2>
                            <h3 className='my-1 text-sm text-gray-400 font-roboto'>{product.licence || subcategory}</h3>
                            <div className='relative flex items-center gap-2'>
                                <p className='text-2xl me-3'>${product.price.toLocaleString()}</p>
                                <StartRating/>
                                <div className={`absolute top-6 text-xl text-red-600 ${product.stock ? 'hidden':''}`}>Producto sin stock.</div>
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
                                        disabled={product.stock === 0}
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
                    {
                        recommended.length > 0 ?
                        <div className='flex flex-col items-center justify-around w-full md:mt-5 md:flex-row'>
                            {recommended.map((reco)=>{
                                return(
                                    <Link to={`/${subCategory ? subCategory : 'libros'}/${reco.licence ? 'f' : 'p'}/${reco.id}`} key={reco.id}>
                                        <img src={reco.image} className='py-3 mx-auto max-h-60 md:max-h-96' alt={reco.name} />
                                        <h3 className='text-center md:text-start max-w-60'>{reco.name}</h3>
                                        <p className='text-lg text-center text-gray-400 md:text-start'>${reco.price.toLocaleString()}</p>
                                    </Link>
                                )
                            })}
                        </div>
                        :
                        <>
                            <div>
                                <img src={example} className='py-3 mx-auto max-h-60 md:max-h-96' alt="example" />
                                <h3 className='text-center md:text-start max-w-60'>Titulo recomendado</h3>
                                <p className='text-lg text-center text-gray-400 md:text-start'>US$30.00</p>
                            </div>
                            <div>
                                <img src={example} className='py-3 mx-auto max-h-60 md:max-h-96' alt="example" />
                                <h3 className='text-center md:text-start max-w-60'>Titulo recomendado</h3>
                                <p className='text-lg text-center text-gray-400 md:text-start'>US$30.00</p>
                            </div>
                            <div>
                                <img src={example} className='py-3 mx-auto max-h-60 md:max-h-96' alt="example" />
                                <h3 className='text-center md:text-start max-w-60'>Titulo recomendado</h3>
                                <p className='text-lg text-center text-gray-400 md:text-start'>US$30.00</p>
                            </div>
                        </>
                    }
                    
                </figure>
            </section>
        </div>
    )
}

export default ItemDetail