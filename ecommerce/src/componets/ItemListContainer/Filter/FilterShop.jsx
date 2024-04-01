
import { Link, useParams } from "react-router-dom";
import './filter.css'

/* export function FilterPrice(){

    

} */


function FilterShop() {
    
    const { categoryId, subCategory } = useParams();
    console.log('categoria: ', categoryId, 'subcategoria; ', subCategory)
    const selectedLetter = "a";

    return (
        
        <>
            <div className="h-full px-3 py-2 overflow-y-auto border-2 border-gray-300 md:h-screen md:border-none rounded-xl bg-gray-50 lg:bg-white dark:bg-gray-800">
                <h2 className="text-2xl">Productos</h2>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">                    
                    <div>
                        <h2>
                            <Link to={'/shop'}
                                className={`${!categoryId && !subCategory ? 'activeClass' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium border border-b-0 border-gray-200 rtl:text-right rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800`}
                            >
                                Todos
                            </Link>
                        </h2>
                        <h3>
                            <Link to={'/shop/category/comicsymangas'}  
                                className={`${categoryId === 'comicsymangas' ? '!text-black shadow' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                >
                                <span>Comics & Mangas</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </Link>
                        </h3>
                        <div className={`${categoryId === 'comicsymangas' ? '': 'hidden'} bg-gray-100`} >
                            <div className="text-gray-500 border-gray-200 rounded-xl dark:border-gray-700 dark:bg-gray-900">
                                <Link to={'/shop/category/comicsymangas/comics'}
                                    className={` ${subCategory === 'comics' ? 'activeClass before:content-["📌"]' : 'inactiveClass'} px-4 flex py-2 border border-b-0 border-gray-200`}
                                    >
                                    Comics
                                </Link>
                                <Link to={'/shop/category/comicsymangas/mangas'}
                                className={` ${subCategory === 'mangas' ? 'activeClass before:content-["📌"]' : 'inactiveClass'} flex gap-1 px-4 py-2 border border-b-0 border-gray-200`}
                                >
                                    Mangas
                                </Link>
                            </div>
                        </div>
                        <h3>
                            <Link to={'/shop/category/libros'}
                                className={`${categoryId === 'libros' ? '!text-black shadow' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                >
                                <span>Libros</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </Link>
                        </h3>
                        <div className={`${categoryId === 'libros' ? '': 'hidden'} bg-gray-100`}>
                            <div className="text-gray-500 border-gray-200 rounded-xl dark:border-gray-700 dark:bg-gray-900">
                                <Link to={'/shop/category/libros/novelas'}
                                    className={` ${subCategory === 'novelas' ? 'activeClass before:content-["📌"]' : 'inactiveClass'} px-4 flex py-2 border border-b-0 border-gray-200`}
                                    >
                                    Novelas
                                </Link>
                                <Link to={'/shop/category/libros/books'}
                                className={` ${subCategory === 'novelas' ? 'activeClass before:content-["📌"]' : 'inactiveClass'} flex gap-1 px-4 py-2 border border-b-0 border-gray-200`}
                                >
                                    Lectura ligera
                                </Link>
                            </div>
                        </div>
                        <h3>
                            <Link to={'/shop/category/funkos'}
                                className={`${categoryId === 'funkos' && !subCategory ? 'activeClass' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                >
                                <span>Funkos</span>
                            </Link>
                        </h3>
                        <div className={`${categoryId === 'funkos' ? '': 'hidden'}`}>
                            <ul className="flex flex-col text-gray-500 border border-t-0 border-gray-200 me-3 dark:border-gray-700 dark:bg-gray-900">
                                funkos
                            </ul>
                        </div>
                    </div>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <h3 className="mb-1 ml-3 md:text-lg">Precio</h3>
                    <div className="px-3 pb-4">
                        <div className="relative w-full">
                            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                            <input 
                                id="labels-range-input" 
                                type="range" defaultValue="50000" 
                                min="1000" max="50000" 
                                className="w-full h-1 bg-gray-200 appearance-none cursor-pointer range-sm dark:bg-gray-700"
                                />
                            <span className="absolute text-sm text-gray-500 dark:text-gray-400 start-0 -bottom-6">Ver precios hasta: </span>
                            <span className="absolute text-sm text-gray-500 dark:text-gray-400 end-0 -bottom-6">Max ($1500)</span>
                        </div>
                    </div>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <h3 className="ml-3 md:text-lg">A - Z</h3>
                    <div className="px-3 filter-section">
                        <div className="grid grid-cols-4 py-1 filter-buttons bg-gray-100/50 md:gap-1">
                            {[' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => (
                                <button 
                                    key={letter} 
                                    className={selectedLetter === letter ? 'active' : ''}
                                    /* onClick={() => handleFilterChange(letter)} */
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default FilterShop