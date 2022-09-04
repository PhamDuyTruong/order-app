import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {setIsCheckout, setIsShowCart} from '../Header/headerSlice';
import {setIsShowWishList} from '../Wishlist/wishlistSlice';
import { Button } from '@material-ui/core';

import './styles.scss';

const PrimaryButton = (props) => {
    const { page, subClass, children } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleMovePage = () =>{
        const cartAction = setIsShowCart(false);
        const wishlistAction = setIsShowWishList(false);
        dispatch(cartAction);
        dispatch(wishlistAction);
        if(page === "shop"){
            const action = setIsCheckout(true);
            history.push('/checkout');
            dispatch(action);
        } else if(page === "checkout"){
            const action = setIsCheckout(true);
            history.push('/checkout');
            dispatch(action);
        }else if(page === "login"){
            const action = setIsCheckout(false);
            history.push('/login');
            dispatch(action);
        }
    };


  return (
    <Button onClick={handleMovePage} className={`primary-btn ${subClass || ''}`}>
        {children}
    </Button>
  )
}

export default PrimaryButton