
import Banner from '../Banner/Banner'
import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList";
//import Filters from './Filter/Filters';
import { useParams } from 'react-router-dom';
import { getApiProducts } from '../../services/products';
import FilterShop from './Filter/FilterShop';

const ItemListContainer = ({titulo}) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(()=>{

      const fetchData = async () => {
        try{
          const product = await getApiProducts(categoryId);
          setProducts(product);
        } catch (error) {console.log(error)}
      }
        fetchData();
    }, [categoryId]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
        <Banner greeting={"Shop"} />
        <h1 className="pt-8 pb-4 text-5xl font-bold text-center">Productos</h1>
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
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
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
              <ItemList products={products} />
            </div>
          </div>

        </div>
        {/* <div className='container flex px-8 py-5 pb-10 mx-auto mb-3'>
          <Filters />
          <ItemList products={products} />
        </div> */}
    </>

  )
}

export default ItemListContainer