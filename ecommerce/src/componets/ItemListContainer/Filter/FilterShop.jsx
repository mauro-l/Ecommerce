
import { Link, useParams } from "react-router-dom";
import './filter.css'
import { useId } from "react";
import { useContext } from "react";
import { FilterContext } from "../../../Context/FilterContext";


function FilterShop() {
    
    const { filters, setFilters, removeFilters } = useContext(FilterContext)
    const { categoryId, subCategory } = useParams();
    const filterPriceId = useId()
    
    const handleChangePrice = (event) => {
        const newMaxPrice = parseInt(event.target.value);

        setFilters(prevState =>({
            ...prevState, 
            maxPrice: newMaxPrice
        }))
    }

    const handleChangeLetter = (letter) => {

        setFilters(prevState =>{
            if(prevState.letters !== letter){
                return{
                    ...prevState, 
                    letters: letter
                };
            }else{
                return{
                    ...prevState, 
                    letters: ' '
                }
            }
        })
    }

    return (
        
        <>
            <div className="h-full px-3 py-2 overflow-y-auto border-2 border-gray-300 md:h-screen md:border-none rounded-xl bg-gray-50 lg:bg-white dark:bg-gray-800">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Filtros</h2>
                    <button className="flex items-center text-sm text-gray-300 hover:text-gray-500" onClick={()=>removeFilters()}>
                        Limpiar filtros
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="mb-1 icon icon-tabler icons-tabler-outline icon-tabler-adjustments-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 6v2" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 4v4m0 4v2" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v5m0 4v2" /><path d="M3 3l18 18" /></svg>
                    </button>
                </div>
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
                                className={` ${subCategory === 'books' ? 'activeClass before:content-["📌"]' : 'inactiveClass'} flex gap-1 px-4 py-2 border border-b-0 border-gray-200`}
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
                            <label htmlFor={filterPriceId} className="sr-only">Labels range</label>
                            <input 
                                id={filterPriceId} 
                                type="range" value={filters.maxPrice} 
                                min={1000} max={40000} 
                                onChange={handleChangePrice}
                                className="w-full h-1 bg-gray-200 appearance-none cursor-pointer range-sm dark:bg-gray-700"
                                />
                            <span className="absolute text-sm text-gray-500 dark:text-gray-400 start-0 -bottom-6">Ver precios hasta: </span>
                            <span className="absolute text-sm text-gray-500 dark:text-gray-400 end-0 -bottom-6">Max ${filters.maxPrice.toLocaleString()}</span>
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
                                    className={filters.letters === letter && filters.letters !== ' ' ? 'border rounded-xl shadow-md' : ''}
                                    onClick={() => handleChangeLetter(letter)}
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