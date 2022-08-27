import React from 'react';

import { Avatar } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

import "./BurgerNavbar.scss"


const BurgerNavbar = () => {
  return (
    <div className='burger-nav'>
        <div className='burger-nav__content'>
            <div className='burger-nav__top'>
                <div className='burger-nav__account'>
                    <Avatar className='burger-nav__icon'/>
                    <div className='burger-nav__username'></div>
                </div>
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
            <div className='burger-nav__favor'>
                <LoyaltyIcon />
                <span>Your wishlist</span>
            </div>

        </div>
        <span className='burger-nav__overlay'>

        </span>
    </div>
  )
}

export default BurgerNavbar