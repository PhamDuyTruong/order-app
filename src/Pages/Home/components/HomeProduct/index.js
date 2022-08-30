import React, {useEffect, useRef} from 'react';
import gsap from "gsap";
import "./styles.scss";
import {ProductsData} from '../../../../utils/fakeData';
import { Container } from "@material-ui/core";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

import "swiper/components/pagination/pagination.scss";

import "../../../../assets/styles/_typography.scss";

import Products from './Products';
import Dialog from '../../../../Components/Dialog';

SwiperCore.use([Autoplay, Pagination])

const HomeProduct = () => {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let cardRef = useRef(null);

  useEffect(() =>{
        const line = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: "60% bottom"
            }
        });
        line.from(captionRef, { x: 20, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(cardRef, { y: 20, opacity: 0, duration: 0.8 }, "-=0.2");
  },[]);


  return (
    <section ref={(el) => containerRef = el} className="home-products">
        <Dialog />
        <Container>
            <div ref={(el) => captionRef = el} className="primary-yellow-text">
                Quality Products
            </div>
            <h2 ref={(el) => headingRef = el} className="primary-heading-text">
                Burgers as expected <strong>delicious</strong>
            </h2>
            <div ref={(el) => cardRef = el} className="home-products__container">
                <Swiper
                   loop
                   speed={800}
                   pagination={{clickable: true}}
                   autoplay={{
                     delay: 5000,
                     disableOnInteraction: false
                   }}
                   breakpoints={{
                    0: {
                      slidesPerView: 1,
                      pagination: false,
                    },
                    600: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                      pagination: false,
                    },
                    960: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                      slidesPerGroup: 4,
                      speed: 1500,
                    },
                  }}
                >
                    {ProductsData.map(({img, name, description, price}, index) =>(
                        <SwiperSlide key={index}>
                                <Products
                                   img={img}
                                   name={name}
                                   desc={description}
                                   price={price}
                                >
                                </Products>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
        
    </section>
  )
}

export default HomeProduct