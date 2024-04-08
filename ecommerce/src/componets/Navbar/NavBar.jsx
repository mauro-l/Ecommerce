import { useState } from 'react';
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom';
import {useAuth} from '/src/Context/AuthContext'

function NavBar() {

  const [mostrarMenu, setmostrarMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth()
  const user = auth.user

  const { displayName, email, photoURL } = auth.user

  const handleLogin = (event) =>{
    event.preventDefault()
    auth.login()
  }
  const handleLogout = () =>{
    auth.logout();
    toggleMenu();
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleMenu = () => {
    const menuHamburguesa = document.getElementById('navbar-search');
    if (mostrarMenu){
      menuHamburguesa.classList.remove('hidden');
      setmostrarMenu(false);
    }else{
      menuHamburguesa.classList.add('hidden');
      setmostrarMenu(true);
    }
  }

  return (    
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto md:py-7">
          <Link to={"/"} className="flex items-center px-4 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-7 md:h-10 md:my-2" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex md:order-2">
              <button onClick={(event)=> handleLogin(event)} className={`text-lg dark:text-blue-500 hover:underline ${user ? 'hidden' : '' }`}>Login</button>
              <button 
                type="button" 
                onClick={toggleMenu} 
                data-collapse-toggle="navbar-search" 
                aria-haspopup="true" 
                aria-expanded={isOpen ? 'true' : 'false'} 
                className={`text-gray-500 ${user ? '' : 'hidden' } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1`}
                >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full md:h-10 md:w-10" src={photoURL} alt="user photo"/>
              </button>
              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute right-0 z-50 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow mt-14 dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{displayName}</span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{email}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <button onClick={()=>handleLogout()} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Sign out</button>
                    </li>
                  </ul>
                </div>
              )}
            <div className="relative hidden">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
                <input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
              </div>
            </div>
            <button onClick={handleMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 mt-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 mt-4 text-xl font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <NavLink 
                  to="/" 
                  className={(navData) => navData.isActive ? 'block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}
                >Home</NavLink>
                </li>
                <li>
                <NavLink 
                  to="/shop" 
                  className={(navData) => navData.isActive ? 'block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}
                >Shop</NavLink>
                </li>
                <li>
                <NavLink 
                  to="/about" 
                  className={(navData) => navData.isActive ? 'block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}
                >About</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  
}

export default NavBar
