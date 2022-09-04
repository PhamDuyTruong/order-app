import React, {useState} from 'react';

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

import PrimaryButton from '../../../PrimaryButton';
import "./styles.scss";

const CartHandle = () => {
   const [isActive, setIsActive] = useState(false);
   const toggleDropUp = () =>{
      setIsActive(!isActive);
   };

  return (
    <div className='cart-handle'>
       <div onClick={toggleDropUp} className='cart-handle__dropup'></div>
       <div className={ isActive ? "cart-handle__detail active" : "cart-handle__detail"}>
          <h3 className="cart-handle__detail-title">Information</h3>
          <div className='cart-handle__row'>
             <span className='cart-handle__label'>Discount</span>
             <span className='cart-handle__content'></span>
          </div>
          <div className='cart-handle__row'>
             <span className='cart-handle__label'>Shipping Cost</span>
             <span className='cart-handle__content'></span>
          </div>
          <div className='cart-handle__row'>
             <span className='cart-handle__label'>Voucher</span>
             <span className='cart-handle__content'></span>
          </div>
       </div>
       <div className='cart-handle__total'>
            <span className='cart-handle__txt'>Total</span>
            <span className='cart-handle__price'></span>
       </div>

       <div className='cart-handle__btns'>
           {/* Primary Button */}
           <PrimaryButton
              page="checkout"
              subClass="red cart-handle__btn"
              className="cart-handle__btn cart-handle__btn--checkout"
           >
               <ShoppingCartIcon />
               <span>Checkout</span>
           </PrimaryButton>
           <PrimaryButton
              page="shop"
              subClass="cart-handle__btn"
           >
               <StoreMallDirectoryIcon />
                <span>Buy more</span>
           </PrimaryButton>
       </div>
    </div>
  )
}

export default CartHandle