import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

const CartHandle = () => {
  return (
    <div className='cart-handle'>
       <div className='cart-handle__dropup'></div>
       <div className='cart-handle__detail'>
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
       </div>
    </div>
  )
}

export default CartHandle