
import Banner from '../Banner/Banner'
import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList";
//import Filters from './Filter/Filters';
import { useParams } from 'react-router-dom';
import { getApiProducts } from '../../services/products';
import FilterShop from './Filter/FilterShop';
//import LoadingCard from '../Cards/LoadingCard';
import EskeletonCard from '../Cards/EskeletonCard';

const ItemListContainer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();
    
    useEffect(()=>{
      setLoading(true)
      const fetchData = async () => {
        try{
          const product = await getApiProducts(categoryId);
          setProducts(product);
        } catch (error) {console.log(error)}
        finally{
          setLoading(false)
        }
      }
        fetchData();
    }, [categoryId]);

    /* if(loading){
      return <EskeletonCard />
    } */


    

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
        <Banner greeting={"Shop"} />
        <h1 className="pt-8 pb-4 text-5xl font-bold text-center">{ categoryId ? categoryId : 'Funkos'}</h1>
        <div className="flex justify-start w-full">
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
              { loading ?
                <EskeletonCard />
                :
                <ItemList products={products} />}
            </div>
          </div>

        </div>
    </>

  )
}

export default ItemListContainer