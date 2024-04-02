import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";


export function useFilters (){

    const { filters, setFilters } = useContext(FilterContext)
    
    const filterProducts = (products) => {

        return products.filter(prod =>{
            const prodNameNormalized = prod.name.normalize("NFD")
            return(
                parseFloat(prod.price) <= parseFloat(filters.maxPrice) && (
                filters.letters === ' ' ||
                prodNameNormalized.startsWith(filters.letters))
            )
        })
    }


    return { filters, setFilters, filterProducts }

}
