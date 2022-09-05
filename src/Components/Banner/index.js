import React from 'react';
import "./styles.scss";
import { useParams } from 'react-router-dom';
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import CommonBannerImg from "assets/images/banner.jpg";
import HandleImage from './HandleImage';

const Banner = () => {
  const { name } = useParams();
  const paramsName = name.replace("-", " ");
  return (
    <section className='banner'  style={{ backgroundImage: `url(${HandleImage(CommonBannerImg)})` }}>
        <h2 className='banner__title'></h2>
        <div className='banner__paths'>
            <span className='banner__path'>Home</span>
            <LinearScaleIcon />
            <span className='banner__path'>Shop</span>
            <LinearScaleIcon />
            <span className='banner__path active'>{paramsName}</span>
        </div>
    </section>
  )
}

export default Banner