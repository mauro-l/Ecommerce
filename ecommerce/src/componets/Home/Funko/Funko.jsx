
import funkoImg from './FunkoPop.webp'
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './funko.css';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/config';
//import { getProducts } from '../../../asyncMock';

function Funko() {

    const [funkoCard, setFunkoCard] = useState([]);
    const [swipperReady, setSwipperReady] = useState(false);

    useEffect (()=>{
        const productRef = collection(db, 'funkos')

        getDocs(productRef)
        .then(res =>{

            setFunkoCard(
                res.docs.map(doc =>{
                return {...doc.data(), id: doc.id}
            })
            )
            setSwipperReady(true)
        })
        .catch(err => console.log('error al traer las funkos carrusel: ', err))
    }, [])
    /* useEffect (()=>{
        getProducts()
        .then(res => {
            setFunkoCard(res)
            setSwipperReady(true)
        })
        .catch(err => console.log('error al traer los productos: ', err))
    }, []) */

    let cardList = [...funkoCard];
    let newFunkoCards = cardList;

    return (
        <section className='flex flex-col mt-8 background md:flex-row'>
            <article className='flex flex-col justify-center w-1/2 mx-auto mt-3 md:w-1/3 md:p-4'>
                <h3 className='pt-3 text-3xl md:text-4xl text-tgray'>No te pierdas los mejores...</h3>
                <img src={funkoImg} alt="funkoLogo" />
            </article>
            <article className='flex items-center justify-center w-3/5 py-5 mx-auto md:w-1/3'>
                {swipperReady && (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 70,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="mySwiper"
                    >
                        {newFunkoCards.map(itemCard =>(
                            <SwiperSlide key={itemCard.id}>
                                <img src={itemCard.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </article>
        </section>
      );
    }

export default Funko