import React from 'react';
import "./styles.scss";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import CommonBannerImg from "assets/images/banner.jpg";
import HandleImage from './HandleImage';

const Banner = () => {

  return (
    <section className='banner'  style={{ backgroundImage: `url(${HandleImage(CommonBannerImg)})` }}>
        <h2 className='banner__title'></h2>
        <div className='banner__paths'>
            <span className='banner__path'>Home</span>
            <LinearScaleIcon />
            <span className='banner__path'>Shop</span>
            <LinearScaleIcon />
            <span className='banner__path active'></span>
        </div>
    </section>
  )
}

export default Banner