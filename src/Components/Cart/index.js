import React from 'react';

import CartItems from './components/CartItem';
import CartHandle from './components/CartHandle';
import "./styles.scss"

const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart__overlay'></div>
        <div className='cart__container'>
            <div className='cart__heading'>
                <h2>Shopping Cart</h2>
                <div className='cart__close'></div>
            </div>
            <CartItems />
            <CartHandle />
        </div>
    </div>
  )
}

export default Cart