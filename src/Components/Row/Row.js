import React from 'react';
import "./row.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Import Swiper styles
import 'swiper/css';

const baseUrl = "http://image.tmdb.org/t/p/original";

export const Row = ({title, lists, isLarge}) => {
    
    const params = {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 1
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 1
            },
            // when window width is >= 630px
            700: {
                slidesPerView: 4,
                spaceBetween: 1,
            },
            // when window width is >= 850px
            850: {
                slidesPerView: 5,
                spaceBetween: 1,
            },
            // when window width is >= 1200px
            1100: {
                slidesPerView: 6,
                spaceBetween: 1,
            },
            // when window width is >= 1200px
            1300: {
                slidesPerView: 7,
                spaceBetween: 1,
            },
            // when window width is >= 1500px
            1500: {
                slidesPerView: 8,
                spaceBetween: 1,

            },
            // when window width is >= 1800px
            1700: {
                slidesPerView: isLarge ? 10 : 7,
                spaceBetween: 2
            },
            // when window width is >= 2100px
            2100: {
                slidesPerView: isLarge ? 10 : 7,
                spaceBetween: 2
            },
            // when window width is >= 2300px
            2300: {
                slidesPerView: isLarge ? 10 : 7,
                spaceBetween: 2
            },
        },
    }

    return (
        <>
            <h2 className='row_title'>{title}</h2>
            <Swiper
                {...params}
                modules={[Navigation]}
                navigation
            >
                {lists?.map(list => (
                    <SwiperSlide key={list.id} >
                        <img 
                            className={isLarge ? "row_posterLarge" : "row_poster"}
                            src={`${baseUrl}${isLarge ? list.poster_path : list.backdrop_path}`}
                            alt=""
                        />  
                        { !isLarge && 
                            <h3 className='row_name'>
                                {list?.name || list.original_name}
                                {list?.title || list.original_title}
                            </h3>
                        }
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    
    )
}
