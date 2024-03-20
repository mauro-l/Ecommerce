
import { Link } from 'react-router-dom';
import './home.css';

const Hero = () => {
  return (
    <section className="image h-[440px] bg-[#f2bd1d] text-white flex flex-col justify-center items-center gap-3 border-4 border-black">
        <h3 className="text-xl drop-shadow-md">Grandes descuentos de verano!</h3>
        <h1 className="text-5xl  drop-shadow-2xl">En todos los comics</h1>
        <Link to={'/shop'} className="py-2 text-lg bg-ered px-9">Ver coleccion</Link>
    </section>
  )
}

export default Hero