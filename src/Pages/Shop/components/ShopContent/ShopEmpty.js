import React from 'react';
import "./ShopEmpty.scss";

import HandleImage from '../../../../Components/Banner/HandleImage';
import EmptyShopImg from '../../../../assets/images/empty-shop.svg';


const ShopEmpty = () => {
  return (
    <div className='shop-empty'>
         <img src={HandleImage(EmptyShopImg)} alt="Empty-shop-img"/>
         <h2 className='shop-empty__title'>
             There is no product you looking for
         </h2>
    </div>
  )
}

export default ShopEmpty