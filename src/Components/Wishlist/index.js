import React, {useContext, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import {AuthContext} from '../../contexts/authContext';
import {db} from '../../config/firebaseConfig';
import {addToWishList, setIsShowWishList} from './wishlistSlice';
import useFirestoreProducts from '../../hooks/useFirestoreProducts';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import "./styles.scss";

import EmptyCart from '../EmptyCart';
import EmptyCartImg from '../../assets/images/empty-cart.svg';


const Wishlist = () => {
  const dispatch = useDispatch();
  const {user} = useContext(AuthContext);
  const {wishListProducts, isShowWishList} = useSelector((state) => state.wishlist);

  const {removeFromFirestore} = useFirestoreProducts();

  useEffect(() =>{
    if(user){
      db.collection('users').doc(user.uid).onSnapshot((doc) =>{
        if(doc.data()){
          const action = addToWishList(doc.data().wishlist);
          dispatch(action);
        }
      })
    }
  }, [user, dispatch]);

  const handleRemoveFromFirestore = (product) =>{
     removeFromFirestore(user.uid, {
      type: 'wishlist',
      productInfo: product
     })
  };

  const closeWishlist = () =>{
    const action = setIsShowWishList(false);
    dispatch(action);
  };


  return (
    <div  className={isShowWishList ? 'wishlist active' : 'wishlist'}>
        <div className='wishlist__top'>
            <div className='wishlist__shop'>
                <RadioOutlinedIcon />
                <span>Your wishlist</span>
                <Button onClick={closeWishlist}>
                     <ExitToAppOutlinedIcon />
                </Button>
            </div>
            <Button>
                <ExitToAppOutlinedIcon />
            </Button>
        </div>

        <div className='wishlist__items'>
           {wishListProducts.length <= 0 && (
               <EmptyCart src={EmptyCartImg} type='wishlist' />
            )}
            {wishListProducts.map(
              ({id, name, img, dsc, price, rate, country}) => (
                <div key={id} className="wishlist__item">
                    <div className='wishlist__img'>
                        <img src={img} alt='Wishlist' />
                    </div>
                 <div className='wishlist__content'>
                    <span className='wishlist__name'>{name}</span>
                       <p className='wishlist__description'>{dsc}</p>
                    <span className='wishlist__price'>${price}</span>
                  </div>
                  <Button
                    onClick={() =>
                      handleRemoveFromFirestore({
                         id,
                          name,
                         img,
                         dsc,
                         price,
                         rate,
                         country,
                      })
                    }
                     className='wishlist__rm'>
                         <DeleteOutlineIcon />
                   </Button>
                </div>
              )
            )}
        </div>
    </div>
  )
}

export default Wishlist