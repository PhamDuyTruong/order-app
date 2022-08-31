import React from 'react';

import HomeBanner from './components/HomeBanner';
import HomeWork from './components/HomeWork';
import HomeIngredient from './components/HomeIngredient';
import HomeCategory from './components/HomeCategory';
import HomeDelivery from './components/HomeDelivery';
import HomeProduct from './components/HomeProduct';
import HomeAnalyst from './components/HomeAnalyst';
import HomeReview from './components/HomeReview';

const Home = () => {
  return (
    <>
       <HomeBanner />
       <HomeWork />
       <HomeIngredient />
       <HomeCategory />
       <HomeDelivery />
       <HomeProduct />
       <HomeAnalyst />
       <HomeReview />
    </>
  )
}

export default Home