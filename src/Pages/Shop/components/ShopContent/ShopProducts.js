import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "./ShopProducts.scss"

import PRIMARY_RED_COLOR from '../../../../constants/color';
import {SHOP_PRODUCTS_VIEW} from '../../../../constants/local';
import {MOBILE_BREAKPOINT} from '../../../../constants/breakpoint'
import {ApiContext} from '../../../../contexts/apiContext';
import {setShopProductsView} from '../../shopSlice';

import CircularProgress from '@material-ui/core/CircularProgress';

import FoodProducts from '../../../../Components/FoodProducts';
import Dialog from '../../../../Components/Dialog';
import ShopEmpty from './ShopEmpty';


const ShopProducts = (props) => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const dispatch = useDispatch();

    const {isLoading} = useContext(ApiContext);
    const {shopProducts, shopProductsView} = useSelector((state) => state.shop);
    const openDialog = () =>{
        setIsShowDialog(true);
    }
    useEffect(() =>{
        const view = localStorage.getItem(SHOP_PRODUCTS_VIEW);
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            const action = setShopProductsView(view);
      
            dispatch(action);
          } else {
            const action = setShopProductsView('grid');
      
            dispatch(action);
          }
    }, []);

    if(isLoading){
        return (
        <div className='spinner'>
            <CircularProgress thickness={5} style={{ color: PRIMARY_RED_COLOR }} />
          </div>
        );
    }
  return (
    <>
        {shopProducts.length <= 0 && <ShopEmpty />}
        <div
           className={
            shopProductsView === 'list'
              ? 'shop-products display-flex'
              : 'shop-products'
          }
        >
            {shopProducts && shopProducts.map((item) => (
                <FoodProducts openDialog={openDialog} key={item.id} {...item}/>
            ))}
        </div>

        <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog}/>
    </>
  )
}

export default ShopProducts