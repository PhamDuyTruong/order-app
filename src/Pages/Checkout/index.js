import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {AuthContext} from '../../contexts/authContext';
import {setIsCheckout} from '../../Components/Header/headerSlice';

import CheckoutBanner from './components/CheckoutBanner';
import CheckoutContent from './components/CheckoutContent';
import CheckoutLogin from './components/CheckoutLogin';

const Checkout = () => {
  const dispatch = useDispatch();
  const {user} = useContext(AuthContext);


  useEffect(() => {
    const action = setIsCheckout(true);
    dispatch(action);
  }, []);
  return (
    <div className='checkout'>
        <CheckoutBanner />
        {user ? <CheckoutContent /> : <CheckoutLogin />}
    </div>
  )
}

export default Checkout