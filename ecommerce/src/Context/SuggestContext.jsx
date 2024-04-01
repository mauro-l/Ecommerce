import { createContext, useRef } from "react";

export const SuggestContext = createContext();

export function SuggestProvider ({ children }){

    const relatedCyM = useRef([])
    const relatedLibros = useRef([])
    const relatedFunkos = useRef([])

    const addCyM = (products) =>{
        relatedCyM.current = products.slice(8, 11);
    }

    const addLibros = (products) =>{
        relatedLibros.current = products;
    }

    const addFunkos = (products) =>{
        relatedFunkos.current = products.slice(8, 11);
    }

    return(
        <SuggestContext.Provider value={
            { 
                addCyM, 
                addLibros, 
                addFunkos,
                relatedCyM,
                relatedLibros,
                relatedFunkos 
            }}>
            {children}
        </SuggestContext.Provider>
    )

}