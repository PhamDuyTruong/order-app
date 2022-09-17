import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import "./style.scss";


const ShopContent = () => {
   const [isFlex, setIsFlex] = useState(false);
   const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className='shop-content'>
        
    </div>
  )
}

export default ShopContent