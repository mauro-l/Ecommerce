import { Tooltip } from "flowbite-react"

function FixedCart({product, removeToCart}) {
     return (
        <tr className="flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-tgray dark:hover:bg-gray-600">
            <td className="flex flex-col items-center justify-between p-2">
                <img src={product.img} className="h-24 max-w-full max-h-full" alt={product.name}/>
                <div className="px-3 py-2 text-xl text-gray-900 dark:text-white">
                    <Tooltip content={`${product.name}`} >
                        <p className='truncate cursor-default text-wrap max-h-44'>
                            {product.name}
                        </p>
                    </Tooltip>
                </div>
            </td>
            <td className="flex justify-between px-3 py-2 text-lg text-center text-gray-900 md:table-cell md:px-6 md:py-3 md:font-normal dark:text-white">
                <p className='md:hidden'>price:</p>
                <p>${product.price}</p>
            </td>
            <td className="order-5 px-3 py-2 text-center md:px-6 md:py-4 md:table-cell">
                <button onClick={removeToCart} className="w-full py-2 text-lg text-white bg-ered md:px-14">Remove</button>
            </td>
        </tr>
    )
}

export default FixedCart