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

import {
    BackgroundIconFour,
    BackgroundIconFive,
    BackgroundIconSix,
    BackgroundIconSeven,
    BackgroundIconEight,
  } from "../../../../utils/BgIcons";

const HomeReview = () => {
  return (
    <div>HomeReview</div>
  )
}

export default HomeReview