
import Libro from "./Libro";
import useFetchData from "../../../hooks/useFetchData";
import { useContext, useEffect, useMemo } from "react";
import { SuggestContext } from "../../../Context/SuggestContext";

function Libros() {

    const { products, getProducts, ready } = useFetchData();
    const { addLibros } = useContext(SuggestContext)

    const librosParams = useMemo(()=> ({
        category: 'libros',
        limits: 4
    }), [])

    useEffect(() => {
        getProducts(librosParams);
    }, [getProducts, librosParams]);

    
    const newBooks = [...products];
    const simpleBook = newBooks.shift();

    if(ready){
        addLibros(newBooks);
    }

    return (
        <div>
            {ready && (
                <Libro books={newBooks} simple={simpleBook} />
            )}
        </div>
    )
}

export default Libros