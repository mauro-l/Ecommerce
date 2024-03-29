
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import MiniCard from './MiniCard';
import useFetchData from '../../../hooks/useFetchData';
import { useEffect, useMemo } from 'react';

function Novedades() {

    const novedadesParams = useMemo(()=> ({
        category: 'novedades',
        limits: 15
    }), [])
    
    console.log('SE RENDERIZA NOVEDADES')
    const { products, getProducts, ready } = useFetchData()

    useEffect(() => {
        getProducts(novedadesParams);
    }, [getProducts, novedadesParams]);

    console.log('---- luego de fetch ----')
    const newCards = [...products]
    
    return (
        <div className='container p-12'>
            <h4 className='text-gray-500 md:text-xl'>Producto</h4>
            <h2 className='text-2xl md:text-5xl'>Novedades</h2>
            {ready && (
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                >
                {newCards.map(itemCard =>(
                    <SwiperSlide key={itemCard.id}>
                        <MiniCard img={itemCard.image} name={itemCard.name} price={itemCard.price} />
                    </SwiperSlide>
                ))}
                </Swiper>
            )}
        </div>
    )
}

export default Novedades