
// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

//import assets
import funkoImg from './FunkoPop.webp'
import './funko.css';

//hooks
import useFunkos from '../../../hooks/useFunkos';
import { useContext } from 'react';
import { SuggestContext } from '../../../Context/SuggestContext';

function Funko() {

    const { funkoCard, swipperReady } = useFunkos();
    const { addFunkos } = useContext(SuggestContext);

    let cardList = [...funkoCard];
    let newFunkoCards = cardList;
    
    if(swipperReady){
        addFunkos(funkoCard)
    }

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
                        {newFunkoCards.map((itemCard, index) =>(
                            <SwiperSlide key={index}>
                                <img src={itemCard.image} />
                            </SwiperSlide>
                        ))}                                                
                        {newFunkoCards.map((itemCard) =>(
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