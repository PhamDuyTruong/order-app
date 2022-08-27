import React from 'react';
import { Container, Avatar } from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from 'assets/images/logo-food.jpg';

import BurgerNavbar from './BurgerNavbar';
import Cart from '../Cart';

const Header = () => {
  return (
    <>
       <header className='navbar' style={{display: "block"}}>
            <Container>
                <div className='navbar__container'>
                    <EmojiFoodBeverageIcon className='hamburger-btn'/>
                    <div className='navbar__link'>
                        <img className='navbar__logo' src={Logo} alt="logo"/>
                    </div>
                    <div className='navbar-left'>
                        <ul className='navbar__list'>
                            <li className='navbar__item'>
                                <HomeIcon />
                                Homepage
                            </li>
                            <li className='navbar__item'>
                                <RestaurantMenuIcon />
                                Order online
                            </li>
                            
                            <li className='navbar__item'>
                                <LibraryBooksIcon />
                                News
                            </li>
                            <li className='navbar__item'>
                                <StoreMallDirectoryIcon />
                                Location
                            </li>
                            
                        </ul>
                    </div>
                    <div className='navbar-right'>
                        <div className='navbar__cart'>
                            <ShoppingCartIcon />
                            <div className='navbar_cart-qnt'>0</div>
                        </div>
                        <div className='navbar__account'>
                           <Avatar />
                           <div className='navbar__username navbar__username--sign-out'>
                            Sign In
                           </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
       </header>

       <BurgerNavbar 
       />

       <Cart />
       
    </>
  )
}

export default Header