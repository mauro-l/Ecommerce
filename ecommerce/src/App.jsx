
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./componets/Navbar/NavBar"
import FixedPanel from "./componets/FixedPanel/FixedPanel"
import Footer from "./componets/Footer/Footer"
import Home from "./componets/Home/Home"
import WishList from "./componets/WishList/WishList"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Checkout from './componets/Cart/Checkout/Checkout';
import { CartProvider } from './Context/CartContext';
//import { useState } from 'react';
import { FooterLog } from './utilities/FooterLog';
import CartListContainer from './componets/Cart/CartListContainer';
import ErrorWeb from './utilities/ErrorWeb';
//import ToastyText from './utilities/ToastyText';


function App() {

  return (

    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<ItemListContainer />} />
            <Route path='/shop/category/:categoryId/:subCategory?' element={<ItemListContainer />} />
            <Route path='/:nameId/:typeId/:productId' element={<ItemDetailContainer />} />
            <Route path='/fav' element={<WishList />} />
            <Route path='/*' element={<ErrorWeb />} />
            <Route path='/cart' element={<CartListContainer />} />
            <Route path='/cart/checkout' element={<Checkout />} />
          </Routes>
          <FixedPanel/>
          <Footer />
          <FooterLog />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
