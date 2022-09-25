import React, {useState} from 'react';
import {useSelector} from "react-redux";
import "./style.scss";

import {BackgroundIconBlurOne, BackgroundIconBlurTwo, BackgroundIconBlurThree, BackgroundIconBlurFour} from '../../../../utils/BgIcons';
import BgIcon from '../../../../Components/BgIcon';

import CheckoutAside from './CheckoutAside';
import CheckoutProgress from './CheckoutProgress';
import CheckoutForm from './CheckoutForm';
import CheckoutUserInfo from './CheckoutUserInfo';
import CheckoutSuccess from '../CheckoutSuccess';

const CheckoutContent = () => {
    const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
    const [isBuy, setIsBuy] = useState(false);
    const cartProducts = useSelector((state) => state.cart);
    
    if(isBuy) return <CheckoutSuccess />

  return (
    <div className='checkout-content'>
        <div className='checkout-content__left'>
            <CheckoutProgress isCheckoutSuccess={isCheckoutSuccess}/>
            <CheckoutUserInfo />
            <CheckoutForm setIsCheckoutSuccess={setIsCheckoutSuccess} setIsPurchased={setIsBuy}/>
        </div>
        <div className='checkout-content__right' style={{ paddingTop: cartProducts.length > 0 ? "95px" : "60px" }}>
        <CheckoutAside />
        <BgIcon
          src={BackgroundIconBlurOne}
          width="25"
          top="25"
          right="-30"
          type="float"
          duration="3"
          zIndex="0"
        />
        <BgIcon
          src={BackgroundIconBlurTwo}
          width="18"
          bottom="30"
          left="5"
          type="float"
          duration="4"
          zIndex="0"
          delay="1"
        />
        <BgIcon
          src={BackgroundIconBlurThree}
          width="20"
          bottom="5"
          right="40"
          type="scale"
          duration="6"
          zIndex="0"
          delay="2"
        />
        <BgIcon
          src={BackgroundIconBlurFour}
          width="12.5"
          top="5"
          left="30"
          type="scale"
          duration="5"
          zIndex="0"
          delay="1"
        />
        </div>
    </div>
  )
}

export default CheckoutContent