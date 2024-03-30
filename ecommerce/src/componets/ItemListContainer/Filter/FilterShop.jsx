//import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import './filter.css'

function FilterShop() {
    
    const { categoryId, subCategory } = useParams();
    console.log('categoria: ', categoryId, 'subcategoria; ', subCategory)
    const selectedLetter = "a";

    return (
        
        <>
            <div className="h-full px-3 py-2 overflow-y-auto border-2 border-gray-300 md:h-screen md:border-none rounded-xl bg-gray-50 lg:bg-white dark:bg-gray-800">
                <h2 className="text-2xl">Productos</h2>
                {/* <ul className="pt-2 mt-2 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <span className="ms-3 md:text-lg">Categoria</span>
                        <div className="w-40 my-1 ml-5 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <Link to={'/shop/category/comicsymangas'} 
                                type="button" 
                                className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'>
                                Comics
                            </Link>
                            <Link to={'/shop/category/libros'} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-gray-200 border-x hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Libros
                            </Link>
                            <Link to={'/shop/category/funkos'} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border border-gray-200 rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Funkos
                            </Link>
                        </div>
                    </li>
                </ul> */}
                
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
                                className={`${categoryId === 'comicsymangas' && subCategory === undefined ? 'activeClass' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                >
                                <span>Comics & Mangas</span>
                            </Link>
                        </h3>
                        <div className={`${categoryId === 'comicsymangas' ? '': 'hidden'}`} >
                            <ul className="flex flex-col text-gray-500 border border-gray-200 border-y-0 me-3 dark:border-gray-700 dark:bg-gray-900">
                                <Link to={'/shop/category/comicsymangas/comics'}
                                    className={` ${subCategory === 'comics' ? 'activeClass' : 'inactiveClass'} px-4 py-2 border-gray-200`}
                                    >
                                    Comics
                                </Link>
                                <Link to={'/shop/category/comicsymangas/mangas'}
                                className={` ${subCategory === 'mangas' ? 'activeClass' : 'inactiveClass'} flex gap-1 px-4 py-2 border-t border-gray-200`}
                                >
                                    Mangas
                                </Link>
                            </ul>
                        </div>
                        <h3>
                            <Link to={'/shop/category/libros'}
                                className={`${categoryId === 'libros' && !subCategory ? 'activeClass' : 'inactiveClass'} flex items-center justify-between w-full gap-3 p-3 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                >
                                <span>Libros</span>
                            </Link>
                        </h3>
                        <div className={`${categoryId === 'libros' ? '': 'hidden'}`}>
                            <ul className="flex flex-col text-gray-500 border border-gray-200 border-y-0 me-3 dark:border-gray-700 dark:bg-gray-900">
                                <Link to={'/shop/category/libros/novelas'}
                                    className={` ${subCategory === 'novelas' ? 'activeClass' : 'inactiveClass'} px-4 py-2 border-gray-200`}
                                    >
                                    Novelas
                                </Link>
                                <Link to={'/shop/category/libros/books'}
                                className={` ${subCategory === 'books' ? 'activeClass' : 'inactiveClass'} flex gap-1 px-4 py-2 border-t border-gray-200`}
                                >
                                    Lectura ligera
                                </Link>
                            </ul>
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
                                {/* <Link to={'/shop/category/comicsymangas/comics'}
                                    className={` ${subCategory === 'comics' ? 'activeClass' : 'inactiveClass'} px-4 py-2 border-b border-gray-200`}
                                    >
                                    Comics
                                </Link>
                                <Link to={'/shop/category/comicsymangas/mangas'}
                                className={` ${subCategory === 'mangas' ? 'activeClass' : 'inactiveClass'} flex gap-1 px-4 py-2 border-b-0 border-gray-200`}
                                >
                                    Mangas
                                </Link> */}
                            </ul>
                        </div>
                    </div>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <h3 className="mb-1 ml-3 md:text-lg">Precio</h3>
                    <div className="px-3 pb-4">
                        <div className="relative w-full">
                            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                            <input id="labels-range-input" type="range" defaultValue="750" min="100" max="1500" className="w-full h-1 bg-gray-200 appearance-none cursor-pointer range-sm dark:bg-gray-700"/>
                            <span className="absolute text-sm text-gray-500 dark:text-gray-400 start-0 -bottom-6">Min ($100)</span>
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

        {/* <div className="p-4 lg:ml-64">
            <div className="flex justify-end w-full">
                <button onClick={toggleSidebar} data-drawer-target="separator-sidebar" 
                data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" 
                type="button" className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
        </div>
        </div> */}

        </>
    )
}

export default FilterShop