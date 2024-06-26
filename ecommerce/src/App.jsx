
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
import CartListContainer from './componets/Cart/CartListContainer';
import ErrorWeb from './utilities/ErrorWeb';
import { WishProvider } from './Context/WishContext';
import { SuggestProvider } from './Context/SuggestContext';
import { FilterProvider } from './Context/FilterContext';
import { AuthProvider } from './Context/AuthContext';
import AboutMe from './componets/About/AboutMe';

function App() {

  return (

    <CartProvider>
      <WishProvider>
        <FilterProvider>
          <BrowserRouter>
              <AuthProvider>
              <NavBar/>
              <SuggestProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<ItemListContainer />} />
                <Route path='/shop/category/:categoryId/:subCategory?' element={<ItemListContainer />} />
                <Route path='/:subCategory/:typeId/:productId' element={<ItemDetailContainer />} />
                <Route path='/fav' element={<WishList />} />
                <Route path='/*' element={<ErrorWeb />} />
                <Route path='/cart' element={<CartListContainer />} />
                <Route path='/cart/checkout' element={<Checkout />} />
                <Route path='/about' element={<AboutMe />} />
              </Routes>
              </SuggestProvider>
              <FixedPanel/>
              <Footer />
              </AuthProvider>
          </BrowserRouter>
        </FilterProvider>
      </WishProvider>
    </CartProvider>
  )
}

export default App
