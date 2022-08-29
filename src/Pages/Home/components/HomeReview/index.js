import React, {useEffect, useRef} from 'react';
import "./styles.scss";
import {ReviewData} from '../../../../utils/fakeData';
import gsap from "gsap";
import { Container } from "@material-ui/core";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import HandleImage from '../../../../Components/Banner/HandleImage';
import BgIcon from '../../../../Components/BgIcon'

import {
    BackgroundIconFour,
    BackgroundIconFive,
    BackgroundIconSix,
    BackgroundIconSeven,
    BackgroundIconEight,
  } from "../../../../utils/BgIcons";


  SwiperCore.use([Autoplay, Pagination]);

const HomeReview = () => {
    let containerRef = useRef(null);
    useEffect(() =>{
        const line = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: "center bottom"
            }
        });

        line.from(containerRef, { y: -20, opacity: 0, duration: 0.8 });
    }, []);


  return (
    <section className='home-reviews'>
        <Container ref={(el) =>containerRef = el}>
            <Swiper
               speed={500}
               spaceBetween={20}
               loop
               grabCursor={true}
               pagination={{clickable: true}}
               autoplay={{
                delay: 8000,
                disableOnInteraction: false
               }}
            >   
                {ReviewData.map(({img, name, role, comment}, index)=>(
                    <SwiperSlide key={index}>
                        <div className='home-reviews__content'>
                            <div className='home-reviews__img-wrapper'>
                                <img 
                                   src={HandleImage(img)}
                                   alt="image"
                                   className='home-reviews__img'
                                />
                            </div>
                            <div className="home-reviews__name">{name}</div>
                            <div className="home-reviews__role">{role}</div>
                            <p className="home-reviews__comment">{comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>

        <BgIcon 
            src={BackgroundIconFour}
            width="14"
            top="-10"
            left="0"
            type="float"
            duration="4"
        />
        <BgIcon 
            src={BackgroundIconFive}
            width="15"
            top="20"
            right="10"
            type="scale"
            duration="10"
            delay="1"
        />
        <BgIcon 
            src={BackgroundIconSix}
            width="12"
            top="40"
            right="550"
            type="float"
            duration="4"
            delay="2"
        />
        <BgIcon 
            src={BackgroundIconSeven}
            width="12"
            bottom="20"
            left="250"
            type="scale"
            duration="10"
            delay="3"
        />
        <BgIcon 
            src={BackgroundIconEight}
            width="13"
            top="-25"
            right="450"
            type="scale"
            duration="10"
            delay="3"
        />
    </section>
  )
}

export default HomeReview