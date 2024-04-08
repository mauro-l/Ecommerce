import { createContext, useEffect, useState } from "react";
import { ToastyText } from "../utilities/ToastyText";

export const WishContext = createContext();

const favInit = JSON.parse(localStorage.getItem('fav')) || [];

export function WishProvider({ children }){

    const [fav, setFav] = useState(favInit);

    useEffect (()=>{
        localStorage.setItem('fav', JSON.stringify(fav));
    }, [fav])

    const checkProductInFav = (product) =>{ 
        return fav.some(prod => prod.id === product.id); 
    }

    const addFav = (productAdd) =>{
        const productIndex = fav.findIndex(item => item.id === productAdd.id);

        if(productIndex === -1){
            setFav(prevState =>[...prevState, productAdd]);
            ToastyText('Agregado a favoritos 💞', 'success')
        }else{            
            ToastyText ('El producto ya se encuentra en favoritos 🤠!');
        }
    }

    const removeItemFav = (productRemove) => {
        setFav(prevState => prevState.filter(item => item.id !== productRemove.id));
    }

    const removeAllItemFav = () => {
        setFav([]);
    }

    return(
        <WishContext.Provider value={{
            fav,
            addFav,
            removeItemFav,
            checkProductInFav,
            removeAllItemFav
        }}>
            {children}
        </WishContext.Provider>
    )

}