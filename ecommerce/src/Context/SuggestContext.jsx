import { createContext, useRef } from "react";

export const SuggestContext = createContext();

export function SuggestProvider ({ children }){

    const relatedCyM = useRef([])

    const addCyM = (products) =>{
        relatedCyM.current = products.slice(8, 11);
    }

    return(
        <SuggestContext.Provider value={{ addCyM, relatedCyM }}>
            {children}
        </SuggestContext.Provider>
    )

}