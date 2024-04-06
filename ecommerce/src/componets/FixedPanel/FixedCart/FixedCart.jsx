import { Tooltip } from "flowbite-react"
import { Link } from "react-router-dom"

function FixedCart({ product, remove, name, cerrarModal, asideContent }) {
     return (
        <tr className="flex flex-col mt-1 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-tgray dark:hover:bg-gray-600">
            <td className="flex flex-col items-center justify-between p-2">
                <img src={product.image} className="h-24 max-w-full max-h-full" alt={product.name}/>
                <div className="px-3 py-1 text-xl text-gray-900 dark:text-white">
                    <Tooltip content={`${product.name}`} >
                        <p className='truncate cursor-default text-wrap max-h-44'>
                            {product.name}
                        </p>
                    </Tooltip>
                </div>
            </td>
            <td className="flex justify-between px-3 text-lg text-center text-gray-900 md:table-cell md:font-normal dark:text-white">
                <p className='md:hidden'>price:</p>
                <p>${product.price.toLocaleString()}</p>
            </td>
            <td className="order-5 py-1 my-1 text-center">
                <div className="flex justify-around">
                    <Link to={`/${asideContent}`} onClick={()=>cerrarModal()}>
                        <button  className='px-8 py-2 text-white bg-esky'>Ver en {name}</button>
                    </Link>
                    <button onClick={remove} className='px-1 text-white bg-black' >{/* boton de cerrar */}
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                    </button> 
                </div>
            </td>
        </tr>
    )
}

export default FixedCart