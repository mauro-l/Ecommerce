
import mangas from './bg/comics.png'
import funkos from '../../assets/products/harry-potter/harry-1.webp'
import libros from './bg/libros.jpg'
import Hero from "./Hero"
import Novedades from '../Novedades/Novedades'
import Libros from './Libros/Libros'
import Products from './Products/Products'
import Funko from './Funko/Funko'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
        <Hero />
        <article className='flex flex-col items-center gap-3 p-4'>
            <h3 className='text-xl'>Tenemos todo para completar tu coleccion</h3>
            <picture className='flex flex-col md:flex-row gap-4'>
                <Link to={'/shop/category/comics'} className='relative'>
                    <img src={mangas} className='h-64 w-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute -bottom-0 p-1 mx-2 text-xl text-black'>Comics</h2>
                </Link>
                <Link to={'/shop/category/libros'} className='relative'>
                    <img src={libros} className='h-64 w-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute -bottom-0 p-1 mx-2 text-xl text-black'>Libros</h2>
                </Link>
                <Link to={'/shop/category/funkos'} className='relative'>
                    <img src={funkos} className='h-64 w-64 p-2 border-2 border-gray-300' alt="img" />
                    <h2 className='absolute -bottom-0 p-1 mx-2 text-xl text-black'>Funkos</h2>
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