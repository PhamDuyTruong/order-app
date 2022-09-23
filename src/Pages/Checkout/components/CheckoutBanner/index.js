import React from 'react';
import "./style.scss";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import CommonBanner from '../../../../assets/images/banner.jpg'

const CheckoutBanner = () => {
  return (
    <div
    style={{ backgroundImage: `url(${CommonBanner})` }}
    className="checkout-banner"
  >
    <h2 className="checkout-banner__title">Checkout</h2>
    <div className="checkout-banner__paths">
      <span className="checkout-banner__path">Home</span>
      <LinearScaleIcon />
      <span className="checkout-banner__path">Shop</span>
      <LinearScaleIcon />
      <span className="checkout-banner__path active">Checkout</span>
    </div>
  </div>
  )
}

export default CheckoutBanner