import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import "./style.scss";
import ShopProducts from './ShopProducts'


const ShopContent = () => {
   const [isFlex, setIsFlex] = useState(false);
   const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className='shop-content'>
        <ShopProducts isFlex={isFlex}/>
    </div>
  )
}

export default ShopContent