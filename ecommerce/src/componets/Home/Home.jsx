
//import assets
import mangas from './bg/comics.png'
import funkos from '../../assets/products/harry-potter/harry-1.webp'
import libros from './bg/libros.jpg'

//import components
import Hero from "./Hero"
import Novedades from './Novedades/Novedades'
import Libros from './Libros/Libros'
import Products from './Products/Products'
import Funko from './Funko/Funko'
import Newsletter from '../Newsletter/Newsletter'

//import react functions
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section>
        <Hero />
        <article className='flex flex-col items-center gap-3 p-4'>
            <h3 className='text-xl'>Tenemos todo para completar tu coleccion</h3>
            <picture className='flex flex-col gap-4 md:flex-row'>
                <Link to={'/shop/category/comicsymangas'} className='relative'>
                    <img src={mangas} className='w-64 h-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute p-1 mx-2 text-xl text-black -bottom-0'>Comics</h2>
                </Link>
                <Link to={'/shop/category/libros'} className='relative'>
                    <img src={libros} className='w-64 h-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute p-1 mx-2 text-xl text-black -bottom-0'>Libros</h2>
                </Link>
                <Link to={'/shop/category/funkos'} className='relative'>
                    <img src={funkos} className='w-64 h-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute p-1 mx-2 text-xl text-black -bottom-0'>Funkos</h2>
                </Link>
            </picture>
        </article>
        <article className='flex justify-center'>
            <Novedades />
        </article>
        <article>
            <Products />
        </article>
        <Funko />
        <article className='flex justify-center p-10'>
            <Libros />
        </article>
        <Newsletter />
    </section>
  )
}

export default Home