
import useFetchData from '/src/hooks/useFetchData';
import Card from '../../Cards/Card'
import { useContext, useEffect, useMemo } from 'react';
import { SuggestContext } from '../../../Context/SuggestContext';

function Products() {

    const { products, getProducts } = useFetchData();
    const { addCyM } = useContext(SuggestContext);

    const productsParams = useMemo(()=> ({
        category: 'comicsymangas',
        limits: 12
    }), [])

    useEffect(() => {
        getProducts(productsParams);
    }, [getProducts, productsParams]);

    addCyM(products)

    return (
        <div className="container flex flex-col flex-wrap justify-center p-8 mx-auto">
            <article className="flex items-end justify-between my-2">
                <div>
                    <h3 className="py-2 text-xl text-gray-500">Comics & Mangas</h3>
                    <h2 className="text-3xl md:text-4xl">Todos nuestros productos</h2>
                </div>
                <div className="px-3 transition-all hover:text-red-600 hover:underline">
                    <button className="flex items-center text-2xl md:text-3xl">
                        Ver mas
                        <svg className="w-4 h-4 rtl:rotate-180 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </article>
            <article className="flex mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {products.map(item=>(<Card key={item.id} {...item} />))}
                </div>
            </article>
        </div>
    )
}

export default Products