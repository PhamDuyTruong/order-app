import React, {useEffect, useState} from 'react';
import Banner from './Banner';
import {BannersData} from "../../../../src/utils/fakeData"
import "./styles.scss"

const HomeBanner = () => {
    const [slide, setSlide] = useState(0);
    useEffect(() =>{
        const timer = setTimeout(() =>{
           if(slide < BannersData.length - 1){
             setSlide(slide + 1);
           }else{
             setSlide(0);
           }
        }, 6000);
        return clearTimeout(timer);
    });

    const handleDot = (id) =>{
        setSlide(id);
    }

  return (
    <section className="home-banners">
        <div className='slides'  style={{ transform: `translateX(${-100 * slide}%)` }}>
            {BannersData.map((banner, index) =>(
                <Banner key={index} {...banner}/>
            ))}
        </div>
        <div className='dots'>
            {Array(BannersData.length).fill().map((_, index) =>{
                return (
                    <span onClick={() =>handleDot(index)} key={index} className={slide === index ? "dot active" : "dot"}>
                    </span>
                )
            })}
        </div>
    </section>
  )
}

export default HomeBanner