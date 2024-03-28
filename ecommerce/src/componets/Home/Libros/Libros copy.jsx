/* 
import { useEffect, useState } from "react"
import { getProducts } from "../../../asyncMock"
import Libro from "./Libro";

function Libros() {

    const [book, getBook] = useState([]);
    const [bookUpdate, getBookUpdate] = useState(false)

    useEffect (()=>{
        getProducts()
        .then(res=>{
            getBook(res)
            getBookUpdate(true)
        })
        .catch(err=>console.log('Error al cargar los libros: ', err))
    },[])

    //coment por si me vuelvo a olvidar lo que hice aca..
    //creo una nueva lista de libros para asi no modificar el arreglo original
    //a ese nuevo arreglo (bookList) recorto los 4 productos que voy a utilizar 
    //luego obtengo de newbooks el producto a destacar y lo guardo en simplebook
    const bookList = [...book];
    const newBooks = bookList.splice(0,4);
    const simpleBook = newBooks.shift();
  return (
    <div>
        {bookUpdate && (
            <Libro books={newBooks} simple={simpleBook} />
        )}
    </div>
  )
}

export default Libros */