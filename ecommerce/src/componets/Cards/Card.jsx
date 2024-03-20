
//import img from '../../assets/example.jpg'
import { Link } from 'react-router-dom'
import StartRating from '../Starts/StartRating'
import addCartSvg from '../icons/shopping-cart-plus.svg'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import shortenName from '../../utilities/nameUtils';

//function Card({id, img, imgML, category, name, title, price}) {

    
    
export default function Card({id, img, imgML, category, name, title, price, stocks, mlStock}) {
    
    const { addCart, checkProductInCart, removeItemCart } = useContext(CartContext);

    /* const nameUrl = name ? name.replace(/\. /g, "-").replace(/\s/g, "-") : null;
    const titleUrl = title? title.replace(/-/g, "").replace(/\s+/g, "-") : null; */
    
    /* const itemNameUrl = nameUrl ? nameUrl : titleUrl; */
    
    const itemNameUrl = shortenName(name, title);

    console.log('no se inunda maaas; ', itemNameUrl);

    const itemName = name? name : title;
    const pic =!category ? imgML : img;
    const newStock = stocks || mlStock
    
    const product = {
        id: id,
        img :pic,
        name: itemName,
        price: price,
        stock: newStock
    };
    
    // console.log(product)
    const productInCart = checkProductInCart(product);

    return (
        <div className="flex justify-center gap-3">
            <div className="relative max-w-xs w-60 bg-white border border-transparent md:hover:bg-[#F2F4F7] md:hover:border-x-2 md:hover:border-t-2 md:hover:border-gray-200 transition duration-300 dark:bg-gray-800 dark:border-gray-700 px-1 py-4 space-y-4 group">
                <Link to={`/${itemNameUrl}/${category ? 'f' : 'p'}/${id}`}>
                    <img width={400} height={600} className='object-contain object-center w-56 h-64 mx-auto' src={pic} alt={`${itemNameUrl}${id}`} />
                </Link>
                <div className="px-4">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 truncate cursor-default dark:text-white">{itemName}</h5>
                    <div className="flex items-center justify-between min-h-4">
                        <p className="text-2xl text-[#797C7F] dark:text-white text-center mr-4">${price}</p>
                        <StartRating />
                    </div>
                    <div className='absolute left-0 z-10 lg:opacity-0 bg-white lg:bg-tgray lg:border-b-2 lg:border-x-2 md:border-gray-200 group-hover:opacity-100 transition-opacity duration-300 px-4 pb-4 w-60 -m-[2px]'>
                        <div className='px-4 mt-2'>
                            <button type='button' onClick={()=>{
                                productInCart ? removeItemCart(product) : addCart(product) }} 
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