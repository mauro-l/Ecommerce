
import { Link } from 'react-router-dom';
import './home.css';
import top from '../../assets/bg-top.webp'
import buttom from '../../assets/bg-buttom.webp'
import ballon1 from '../../assets/balloon1.webp'
import ballon3 from '../../assets/balloon3.webp'
import ballon4 from '../../assets/balloon4.webp'
import star from '../../assets/star1.webp'

const Hero = () => {
  return (
    <section className="relative overflow-hidden z-10 image h-[440px] bg-[#f2bd1d] text-white flex flex-col justify-center items-center gap-3 border-4 border-black">
        <h3 className="text-xl font-bold md:text-3xl drop-shadow-md">Grandes descuentos de verano!</h3>
        <h1 className="text-3xl font-bold md:text-6xl drop-shadow-2xl">En todos los comics</h1>
        <Link to={'/shop'} className="px-10 py-3 text-lg bg-ered">Ver coleccion</Link>
        <img src={top} alt="background image hero" className='absolute top-0 left-0 -z-10 w-60 md:w-80' />
        <img src={buttom} alt="background image hero" className='absolute bottom-0 right-0 -z-10 w-60 md:w-80' />
        <img src={ballon1} alt="background image hero" className='absolute w-20 md:top-5 md:left-64 left-10 top-16 -z-10 md:w-40' />
        <img src={ballon3} alt="background image hero" className='absolute w-32 bottom-5 left-10 md:left-28 -z-10 md:w-40' />
        <img src={ballon4} alt="background image hero" className='absolute right-0 w-32 top-60 md:bottom-10 md:right-20 -z-10 md:w-40' />
        <img src={star} alt="background image hero" className='absolute w-16 right-10 top-10 md:top-10 md:right-20 -z-10 md:w-24' />
    </section>
  )
}

export default Hero