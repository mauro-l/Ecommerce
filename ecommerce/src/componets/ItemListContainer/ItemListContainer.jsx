
//import components
import Banner from '../Banner/Banner'
import ItemList from "./ItemList/ItemList";
import FilterShop from './Filter/FilterShop';
import EskeletonCard from '../Cards/EskeletonCard';

//import hooks
import { useShop } from '../../hooks/useShop';
import { useFilters } from '../../hooks/useFilters';

//imports react functions
import { useState } from "react"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  console.log('se renderiza el shop')
  //aside function
  const [isOpen, setIsOpen] = useState(false);

  //filters 
  const [sort, setSort] = useState('default')
  const { filterProducts } = useFilters();

  //fetch
  const { categoryId, subCategory } = useParams();

  let category = categoryId || '';
  const { ready, products } = useShop(category, subCategory, sort, 20)

  let filteredProducts = products; 

  if (ready) { 
    filteredProducts = filterProducts(products); 
  }



  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSortChange = (e) =>{
    setSort(e.target.value)
  }

  
  return (
    <>
        <Banner greeting={"Shop"} categoryId={categoryId} subcategory={subCategory} />
        <div className="flex items-center justify-between w-full mt-4">
          <div>
              <button 
                onClick={toggleSidebar} 
                data-drawer-target="separator-sidebar" 
                data-drawer-toggle="separator-sidebar" 
                aria-controls="separator-sidebar" 
                type="button"
                className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                  <span className="sr-only">Open sidebar</span>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M6 4v4" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M12 4v10" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v11" />
                  </svg>
                  <p className='text-lg'>Filtros</p>
              </button>
          </div>
          <div className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <select name="sort" className='rounded-xl border-tgray' onChange={handleSortChange} value={sort}>
              <option value="default">Más relevantes</option>
              <option value="asc">Nombre Ascendente</option>
              <option value="desc">Nombre Descendente</option>
              <option value="mayor">Mayor Precio</option>
              <option value="menor">Menor Precio</option>
            </select>
          </div>
        </div>
        <div className='relative'>
          <aside 
            id="separator-sidebar" 
            className={`absolute top-0 left-0 py-4 lg:ml-2 z-40 w-64 h-screen transition-transform lg:translate-x-0 
            ${isOpen ? '' : '-translate-x-full'}`} 
            aria-label="Sidebar"
          >
            <FilterShop />
          </aside>
          <div className="p-4 lg:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              { !ready ?
                <EskeletonCard />
                :
                <ItemList products={ filteredProducts } />
              }
            </div>
          </div>
        </div>
    </>

  )
}

export default ItemListContainer