
import Libro from "./Libro";
import useFetchData from "../../../hooks/useFetchData";

function Libros() {

    const { products, ready } = useFetchData('books', 4);
    console.log('SE RENDERISA HOME LIBROS')
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