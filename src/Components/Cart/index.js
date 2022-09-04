import React, {useContext, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {db} from '../../config/firebaseConfig';
import {addToCart} from './cartSlice';
import {setIsShowCart} from '../Header/headerSlice';
import CartItems from './components/CartItem';
import CartHandle from './components/CartHandle';
import EmptyCart from '../EmptyCart';
import EmptyCartImg from '../../assets/images/empty-cart.svg'
import "./styles.scss";

const Cart = () => {
  const {isShowCart} = useSelector((state) => state.header);
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () =>{
    const action = setIsShowCart(false);
    dispatch(action);
  };

  useEffect(() =>{

  })

  return (
    <div className={isShowCart ? 'cart active' : 'cart'}>
        <div onClick={closeCart} className='cart__overlay'></div>
        <div className='cart__container'>
            <div className='cart__heading'>
                <h2>Shopping Cart</h2>
                <div className={!isShowCart ? 'cart__close active' : 'cart__close'} onClick={closeCart}></div>
            </div>
            {cartProducts.length < 0 && (
              <EmptyCart src={EmptyCartImg} type="shop"/>
            )}
            <CartItems />
            <CartHandle />
        </div>
    </div>
  )
}

export default Cart