import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FilterProvider ({ children }) {

    const [filters, setFilters] = useState({
        letters: '',
        maxPrice: 40000
    })

    
    const removeFilters = () => {
        setFilters({
            letters: '',
            maxPrice: 40000
        })
    }

    return(
        <FilterContext.Provider value={{ filters, setFilters, removeFilters }}>
            {children}
        </FilterContext.Provider>
    )
}