import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import "./style.scss";
import ShopProducts from './ShopProducts';
import ShopHandle from './ShopHandle';
import ShopPagination from './ShopPagination';


const ShopContent = () => {
   const [isFlex, setIsFlex] = useState(false);
   const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className='shop-content'>
        <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex}/>
        <ShopProducts isFlex={isFlex}/>
        {products.length > 0 && <ShopPagination />}
    </div>
  )
}

export default ShopContent