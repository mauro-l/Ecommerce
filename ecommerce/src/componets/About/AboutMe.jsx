
//import assets
import Banner from "../Banner/Banner"
import image from '../../assets/about.jpg'
import reactImage from '../../assets/react.svg'
import vitelogo from '../../../public/vite.svg'
import tailwind from '../../assets/tailwind.png'
import avatar1 from '../../assets/products/harry-potter/harry-1.webp'
import avatar2 from '../../assets/products/naruto/kakashi_hatake_front.webp'
import avatar3 from '../../assets/products/one-piece/luffy-1.png'
import avatar4 from '../../assets/products/pokemon/charmander-1.webp'
import avatar5 from '../../assets/products/star-wars/luke-1.webp'

//import context & helpers
import {useAuth} from '/src/Context/AuthContext'
import { getCurrentDate, getCurrentTime } from '../../helper/currentDate'
import { ToastyText } from '../../utilities/ToastyText' 

//import react functions
import { Carousel } from "flowbite-react";
import { useForm } from 'react-hook-form';
import { db } from "../../services/config"
import { addDoc, collection } from "firebase/firestore"


function AboutMe() {

    const { register, handleSubmit, reset } = useForm();
    const auth = useAuth()
    const user = auth.user

    const comment = (data) =>{
        const commentData = {
            name: data.name,
            message: data.message,
            mail: user.email
        }

        const commentDetail = {...commentData, date: getCurrentDate() + ' ' + getCurrentTime()}

        const orderRef = collection(db, 'message');
        addDoc(orderRef, commentDetail);
        ToastyText('Mensaje enviado! Muchisimas Gracias!', 'success')
        reset();
    }

  return (
    <>
        <Banner greeting={'About Me'} />
        <section>
            <article className="flex flex-col gap-4 p-8 md:flex-row">
                <img src={image} alt="imagen de about" className="order-2 md:order-1 md:w-1/3" />
                <div className="order-1 p-4">
                    <h3 className="text-gray-500">Un poco sobre mí...</h3>
                    <h1 className="py-2 font-semibold font-roboto">Holass, Gracias por visitar mi sitio! Mi nombre es Mauro Laime y...</h1>
                    <p className="text-gray-500 font-roboto">
                        Soy el desarrollador de este proyecto. Este fue creado como proyecto final del curso de React de Coderhouse, 
                        el cual requería desarrollar un e-commerce de un rubro a elección. La temática de este e-commerce fue una comiquería web, 
                        donde se pueda simular la venta de cómics y mangas hasta libros y figuras coleccionables. 
                        Para ser mi primer e-commerce, estoy muy satisfecho con el resultado final. Utilicé herramientas que me facilitaron su creación y 
                        si bien tuve dificultades en varias oportunidades, después de todo, pude enfrentar esos obstáculos y sacar el proyecto adelante.
                    </p>
                    <p className="text-gray-500 font-roboto">
                        Por cualquier duda, consulta o comentario sobre la página o sobre mí, dejo mis redes sociales para que puedan contactarme:                        
                    </p>
                    <div className="flex justify-around mt-5 md:mt-8">
                        <a href="www.linkedin.com/in/mauro-laime-854a43267">
                            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="ms-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></span>
                            Linkedin
                        </a>
                        <a href="https://github.com/mauro-l">
                            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></span>
                            GitHub
                        </a>
                        <a href="mailto:maurol.dev@gmail.com">
                            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-inbox"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 13h3l3 3h4l3 -3h3" /></svg></span>
                            Email
                        </a>
                    </div>
                </div>
            </article>
            <article className="flex flex-col items-center p-8 md:flex-row bg-tgray">
                <div className="md:w-2/3 font-roboto">
                    <h3 className="font-sans text-gray-600">Especificaciones técnicas</h3>
                    <h2 className="py-1 font-medium">Tecnologías Utilizadas</h2>
                    <p className="text-gray-500">
                        El proyecto se desarrolló utilizando React con Vite como entorno de desarrollo, Tailwind CSS para estilos, y las siguientes librerias y servicios:

                        API de MercadoLibre para cómics y mangas.
                        Firebase/Firestore para almacenamiento de datos de Funkos.
                        Autenticación de Firebase para el inicio de sesión.
                        Librerías Flowbite y SweetAlert2 para mejorar la experiencia del usuario.
                    </p>
                </div>
                <div className="flex items-center md:flex-col md:w-1/3">
                    <img src={reactImage} className="w-24" alt="react logo" />
                    <img src={vitelogo} className="w-24 py-5" alt="vite logo" />
                    <img src={tailwind} className="w-24" alt="" />
                </div>
            </article>
            <article className="p-8">
                <p className="text-center font-roboto">
                    Más allá de las tecnologías aprendidas, valoro mucho el grupo que me acompañó durante la cursada. Juntos pudimos resolver muchas dudas y problemas que se nos presentaron, lo que nos ayudó a crecer aún más como buenos desarrolladores. 
                    <br /> Les agradezco mucho a todos y los invito a dejarme un comentario, estos serán subidos en esta sección! 
                </p>
                <form onSubmit={handleSubmit(comment)} className="max-w-sm mx-auto mt-3">
                    <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        </span>
                        <input 
                            type="text" 
                            id="website-admin" 
                            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" 
                            {...register('name')}
                        />
                    </div>
                    <label htmlFor="message" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea 
                        id="message" 
                        rows="4" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."
                        {...register('message')}    
                    ></textarea>
                    <span className="pt-2 text-sm text-gray-400 text-wrap">debes iniciar sesion con tu cuenta google para continuar</span>
                    <button disabled={!user} className="px-6 py-2 my-1 text-white bg-esky">Enviar Comentario</button>
                </form>
            </article>
        </section>
        <section className="p-8">
            <h3 className="text-2xl text-center font-roboto">Testimonials</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-96 sm:h-96 xl:h-80 2xl:h-96">
                <Carousel>
                    <div><span><img src={avatar1} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar2} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar3} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar4} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar5} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                </Carousel>
                <Carousel indicators={false}>
                    <div><span><img src={avatar5} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar4} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar3} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar2} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    <div><span><img src={avatar1} className="w-12 mx-auto mb-2 border-2 border-green-500 rounded-full" alt="img avatar" /></span><p className="text-center text-gray-600 text-wrap md:px-8">Lorem ipsum dolor sit. Vero voluptate placeat, quisquam quod temporibus amet? Officiis perferendis voluptatibus quis blanditiis!</p></div>
                    
                </Carousel>
            </div>
        </section>
    </>
  )
}

export default AboutMe