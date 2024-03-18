
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./componets/Navbar/NavBar"
import FixedPanel from "./componets/FixedPanel/FixedPanel"
import Footer from "./componets/Footer/Footer"
import Home from "./componets/Home/Home"
import WishList from "./componets/WishList/WishList"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Checkout from './componets/Cart/Checkout/Checkout';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';
import { FooterLog } from './utilities/FooterLog';
import CartListContainer from './componets/Cart/CartListContainer';
import ToastyText from './utilities/ToastyText';


function App() {

  const [cart, setCart] = useState([]);

  const checkProductInCart = (product) =>{ 
    return cart.some(prod => prod.id === product.id); 
  }

  
  const subtractQuantity = (product) => {

    const productIndex = cart.findIndex(item => item.id === product.id);

    if(productIndex !== -1 && cart[productIndex].quantity > 1){

      const updateCart = [...cart];
      updateCart[productIndex].quantity -= 1;
      setCart(updateCart)
    }
  }

  
  const addCart = (product) =>{
    const productIndex = cart.findIndex(item => item.id === product.id);
    
    const stockAvailable = product.stock - (productIndex >= 0 ? cart[productIndex].quantity : 0);
    console.log('stock: ', stockAvailable);
    //console.log('!!!cart index: ', typeof cart[productIndex].quantity ,'|', cart[productIndex].quantity, '||',product.stock , 'product stock: ', typeof product.stock)
    
    if(stockAvailable == 0){
      console.error('stock disponible: ', stockAvailable);
      //const alerta=(`no hay mas productos disponible. Stock: ${product.stock}`)
      ToastyText ('La cantidad seleccionada supera el stock disponible.')
    }

    if(productIndex >= 0 && cart[productIndex].quantity < product.stock){
      console.log('sumando')
      const newCart = [...cart];
      newCart[productIndex].quantity += 1
       return setCart(newCart)
    }

    if(productIndex === -1){
      setCart(prevState =>([
        ...prevState,{
          ...product,
          quantity: 1
        }
      ]));
    }
  }

  const removeItemCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  }


  return (

    <CartContext.Provider value={{cart, setCart, addCart, checkProductInCart, removeItemCart, subtractQuantity}}>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<ItemListContainer />} />
            <Route path='/shop/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/:nameId/:typeId/:productId' element={<ItemDetailContainer />} />
            <Route path='/fav' element={<WishList />} />
            <Route path='/cart' element={<CartListContainer />} />
            <Route path='/cart/checkout' element={<Checkout />} />
          </Routes>
          <FixedPanel/>
          <Footer />
          <FooterLog />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
