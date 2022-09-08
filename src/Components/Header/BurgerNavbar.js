import React from 'react';
import { useDispatch } from "react-redux";

import {setIsShowWishList} from '../../Components/Wishlist/wishlistSlice';
import { Avatar } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

import "./BurgerNavbar.scss"


const BurgerNavbar = (props) => {
    const {isShow, showBurgerNav, handleLogOut, handleLogin, user} = props;
    const dispatch = useDispatch();
    const openWishList = () =>{
        const action = setIsShowWishList(true);
        dispatch(action);
    };

    const onHandleLogin = () =>{
        if(!user){
            handleLogin();
            showBurgerNav();
        }
    }
  return (
    <div className='burger-nav'>
        <div className={ isShow ? "burger-nav__content active" : "burger-nav__content"}>
            <div className='burger-nav__top'>
                <div className='burger-nav__account' onClick={onHandleLogin}>
                    <Avatar className='burger-nav__icon'/>
                    <div className='burger-nav__username'></div>
                </div>
                {user && (
                     <div onClick={handleLogOut} className="burger-nav__logout">
                         Log Out
                     </div>
                )}
            </div>
            <ul className='burger-nav__list'>
                <li className='burger-nav__item'>
                    <HomeIcon />
                    Homepage
                </li>
                <li className='burger-nav__item'>
                    <RestaurantMenuIcon />
                    Order Online
                </li>
                <li className='burger-nav__item'>
                    <LibraryBooksIcon />
                    News
                </li>
                <li className='burger-nav__item'>
                    <StoreMallDirectoryIcon />
                    Location
                </li>
            </ul>
            <div onClick={openWishList} className='burger-nav__favor'>
                <LoyaltyIcon />
                <span>Your wishlist</span>
            </div>

        </div>
        <span className={ isShow ? "burger-nav__overlay active" : "burger-nav__overlay"} onClick={showBurgerNav}>
        </span>
    </div>
  )
}

export default BurgerNavbar