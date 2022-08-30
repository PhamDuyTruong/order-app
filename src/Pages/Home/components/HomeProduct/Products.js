import React from 'react';
import "./Products.scss";
import HandleImage from '../../../../Components/Banner/HandleImage';

const Products = (props) => {
  const {img, name, desc, price} = props
  return (
    <div className='home-product'>
        <div className='home-product__wrapper'>
            <img 
               className='home-product__img'
               src={HandleImage(img)}
               alt="Home product"
            />
            <button className='btn'>
                <span>Best deal</span>
            </button>
        </div>
        <div className='home-product__content'>
            <h3 className='home-product__name'>{name}</h3>
            <p className='home-product__description'>{desc}</p>
            <div className='home-product__price'>{price}</div>
        </div>
    </div>
  )
}

export default Products