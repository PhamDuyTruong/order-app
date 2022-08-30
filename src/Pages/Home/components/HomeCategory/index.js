import React, {useEffect, useRef} from 'react';
import {CategoryData} from '../../../../utils/fakeData';
import "./styles.scss";
import gsap from "gsap";
import { Button, Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import HandleImage from '../../../../Components/Banner/HandleImage';
import BgIcon from '../../../../Components/BgIcon';

import "../../../../assets/styles/_typography.scss";

import {BackgroundIconOne, BackgroundIconTwo, BackgroundIconThree} from '../../../../utils/BgIcons';

SwiperCore.use([Autoplay, Navigation]);

const HomeCategory = () => {
    let containerRef = useRef(null);
    let captionRef= useRef(null);
    let headingRef = useRef(null);
    let cardRef = useRef(null);

    useEffect(() =>{
        const line = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: "20% bottom"
            }
        });

        line.from(captionRef, {
            x: 20,
            opacity: 0,
            duration: 0.8,
          })
            .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
            .from(cardRef, { y: -20, opacity: 0, duration: 0.6 }, "-=0.2");
    }, []);

  return (
    <section className='home-category'>
        <BgIcon 
           src={BackgroundIconOne}
           width="25"
           top="-60"
           left="-20"
           type="float"
           duration="3"
        />
           <BgIcon 
           src={BackgroundIconTwo}
           width="15"
           top="-85"
           right="-20"
           type="scale"
           duration="5"
        />
           <BgIcon 
           src={BackgroundIconThree}
           width="15"
           top="60"
           right="60"
           type="float"
           duration="2.5"
           delay="1"
        />

        <Container>
            <div ref={(el) => containerRef = el} className="home-category__container">
                <div ref={(el) => captionRef = el} className='primary-yellow-text'>
                        What we have
                </div>
                <h2 ref={(el) => headingRef = el} className='primary-heading-text'>
                        Food Category
                </h2>
                <div ref={(el) => cardRef = el} className="home-category__cards">
                    <Swiper
                       slidesPerView={2}
                       loop
                       loopFillGroupWithBlank={true}
                       autoplay={{
                        delay: 1800,
                        disableOnInteraction: false
                       }}
                       navigation={{
                        prevEl: ".prev-btn",
                        nextEl: "next-btn"
                       }}
                       breakpoints={{
                        600: {
                          slidesPerView: 4,
                        },
                        960: {
                          slidesPerView: 7,
                        },
                      }}
                    >
                        {CategoryData.map(({img, name}, index)=>(
                            <SwiperSlide key={index}>
                                <div className='home-category__card'>
                                    <div className='home-category__card-img-wrapper'>
                                        <img 
                                           className='home-category__card-img'
                                           src={HandleImage(img)}
                                           alt="image"
                                        />
                                    </div>
                                    <div className="home-category__card-description">
                                          {name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Button className='prev-btn'>
                        <DoubleArrowIcon style={{transform: "rotate(180deg"}}/>
                    </Button>
                    <Button className='next-btn'>
                        <DoubleArrowIcon />
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeCategory