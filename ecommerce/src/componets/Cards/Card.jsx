
import { Link } from 'react-router-dom'
import addCartSvg from '../icons/shopping-cart-plus.svg'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { WishContext } from '../../Context/WishContext';
    
export default function Card(product) {
    
    const { addCart, checkProductInCart, removeItemCart } = useContext(CartContext);
    const { addFav, checkProductInFav, removeItemFav } = useContext(WishContext);

    const handleFav = (product) =>{
        const productInFav = checkProductInFav(product)
        if(productInFav){
            removeItemFav(product);
        }else{
            addFav(product);
        }
    }

    const productInCart = checkProductInCart(product);

    return (
        <div className="flex justify-center gap-3 mt-4">
            <div className="relative max-w-xs w-60 bg-white border border-transparent md:hover:bg-[#F2F4F7] md:hover:border-x-2 md:hover:border-t-2 md:hover:border-gray-200 transition duration-300 dark:bg-gray-800 dark:border-gray-700 px-1 py-4 space-y-4 group">
                <Link to={`/${product.url}/${product.licence ? 'f' : 'p'}/${product.id}`}>
                    <img className='object-fill mx-auto h-60' src={product.image} alt={`${product.url}${product.id}`} />
                </Link>
                <button 
                    onClick={()=> handleFav(product)}
                    className='absolute z-20 p-1 border rounded-full right-7 bottom-4 bg-white/40'
                    >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="black"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </button>
                <div className="px-4">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 truncate cursor-default dark:text-white">{product.name}</h5>
                    <div className="flex items-center justify-between min-h-4">
                        <p className="text-2xl text-[#797C7F] dark:text-white text-center mr-4">${product.price}</p>
                        {/* <StartRating /> */}
                    </div>
                    <div className='absolute left-0 z-10 lg:opacity-0 bg-white lg:bg-tgray lg:border-b-2 lg:border-x-2 md:border-gray-200 group-hover:opacity-100 transition-opacity duration-300 px-4 pb-4 w-60 -m-[2px]'>
                        <div className='px-4 mt-2'>
                            <button type='button' 
                                onClick={()=>{productInCart ? removeItemCart(product) : addCart(product) }} 
                                className={`flex items-center content-center justify-center w-full p-3 font-medium text-center text-white ${ productInCart ? 'bg-ered' : 'bg-black'}`}
                                >
                                <img src={addCartSvg} className='me-2' alt="cart-plus svg" />
                                {productInCart ? 'QUITAR DEL CARRITO' : 'AGREGAR AL CARRITO' }
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

//export default Card