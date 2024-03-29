
import Libro from "./Libro";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect, useMemo } from "react";

function Libros() {

    const librosParams = useMemo(()=> ({
        category: 'libros',
        limits: 4
    }), [])

    const { products, getProducts, ready } = useFetchData();
    console.log('SE RENDERISA HOME LIBROS')

    useEffect(() => {
        getProducts(librosParams);
    }, [getProducts, librosParams]);

    const newBooks = [...products];
    const simpleBook = newBooks.shift();

    return (
        <div>
            {ready && (
                <Libro books={newBooks} simple={simpleBook} />
            )}
        </div>
    )
}

export default Libros