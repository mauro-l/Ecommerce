
import { useEffect, useRef, useState } from 'react'
import icons from './icons/icons'
//import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import FixedCartList from './FixedCart/FixedCartList';

function FixedPanel() {

  const [isOpened, setOpened] = useState(false);
  const [asideContent, setAsideContent] = useState('');

  const asideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setOpened(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  let contentName;

  switch (asideContent) {
    case 'fav':
      contentName = 'Favoritos';
      break;
    case 'cart':
      contentName = 'Carrito';
      break;
    case 'descuentos':
      contentName = 'Descuentos';
      break;
    default:
      contentName = ' ';
  }

  const openAside = (content) =>{
    setAsideContent(content);
    setOpened(true);
  }

  const closeAside = () =>{
    setOpened(false);
  }

  return (
    <div>
      <div  className='fixed right-0 z-10 transform -translate-y-1/2 top-1/2'>
        <button 
        data-drawer-target="default-sidebar" 
        data-drawer-toggle="default-sidebar" 
        aria-controls="default-sidebar" type="button"
        onClick={()=> openAside('cart')}
        className='flex items-center justify-center w-10 h-10 p-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
          <CartWidget icon={icons} />
        </button>
        <button 
          data-drawer-target="default-sidebar" 
          data-drawer-toggle="default-sidebar" 
          aria-controls="default-sidebar" type="button"
          onClick={()=> openAside('fav')}
          className='flex items-center justify-center w-10 h-10 p-1 my-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
            <img src={icons.favorito} className='w-7' alt="favoritos" />
        </button>
        <button 
          data-drawer-target="default-sidebar" 
          data-drawer-toggle="default-sidebar" 
          aria-controls="default-sidebar" type="button"
          onClick={()=> openAside('descuentos')}
          className='flex items-center justify-center w-10 h-10 p-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
            <img src={icons.descuento} className='w-7' alt="nuevo" />
        </button>
      </div>
      {isOpened &&(
        <aside 
          className={`fixed top-0 right-0 z-40 w-64 lg:w-80 h-screen transition-transform ${isOpened? '-translate-x-full' : ''} translate-x-0`} 
          id="default-sidebar" 
          aria-label="Sidebar"
          ref={asideRef}
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div className='flex items-center justify-between gap-2 m-2'>
                <button onClick={closeAside} className='text-black' >{/* boton de cerrar */}
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                  </svg>
                </button> 
                <h2 className='text-2xl text-center'>{contentName}</h2>
              </div>

              <div>
                {
                  asideContent && (<FixedCartList content={asideContent} name={contentName} cerrarModal={()=>closeAside()} asideContent={asideContent} />)
                }
              </div>
              
            </div>
        </aside>)
      }
    </div>
  )
}

export default FixedPanel