import React, {useEffect, useState, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
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

import "./styles.scss";
import {AuthContext} from '../../contexts/authContext';
import { auth } from '../../config/firebaseConfig';
import {setIsShowCart, setIsCheckout} from './headerSlice';
import {setIsShowWishList} from '../Wishlist/wishlistSlice'

import Logo from '../../assets/images/logo-food.jpg';

import BurgerNavbar from './BurgerNavbar';
import Cart from '../Cart';
import Wishlist from '../Wishlist';
import Dialog from '../Dialog';

const Header = () => {
    const [isStickyTop, setIsStickyTop] = useState(false);
    const [isShowBurger, setIsShowBurger] = useState(false);
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [total, setTotal] = useState(0);

    const history = useHistory();
    const dispatch = useDispatch();
    const {user, setUser, hasHeader} = useContext(AuthContext);
    const cartProducts = useSelector((state) => state.cart);
    const {isAtCheckout} = useSelector((state) => state.header);
    const showBurgerNav = () =>{
        setIsShowBurger(!isShowBurger);
    };

    const handleBackToHome = () =>{
        const action = setIsCheckout(false);
        history.push('/home');
        setIsCheckout(false);
        dispatch(action);
    };

    const handleLogin = () =>{
        history.push('/login');
    };

    const handleLogOut = () =>{
        auth.signOut().then(() =>{
            setUser(false);
        })
    };

    const toggleCart = () =>{
        const action = setIsShowCart(true);
        user && dispatch(action);
        !user && setIsShowDialog(true);
    };

    const toggleWishList = () =>{
        const action = setIsShowWishList(true);
        dispatch(action);
    };

    useEffect(() =>{
        const scrollShowNav = () =>{
            if(window.scrollY >= 100){
                setIsStickyTop(true);
            }else{
                setIsStickyTop(false);
            }
        };

        window.addEventListener("scroll", scrollShowNav);
        return window.removeEventListener("scroll", scrollShowNav);
    }, []);

     useEffect(() =>{
            const totalQnt = cartProducts.reduce((acc, item) => acc + item.qnt, 0);
            setTotal(totalQnt);
     }, [cartProducts]);

  return (
    <>
       <header className={isStickyTop ? 'navbar active' : 'navbar'} style={{display: "block"}}>
            <Container>
                <div className={ isAtCheckout ? 'navbar__container checkout' : 'navbar__container'}>
                    <EmojiFoodBeverageIcon onClick={showBurgerNav} className='hamburger-btn'/>
                    <div className='navbar__link' onClick={handleBackToHome}>
                        <img className='navbar__logo' src={Logo} alt="logo"/>
                    </div>
                    <div className='navbar--left'>
                        <ul className='navbar__list'>
                            <li className='navbar__item'>
                                <HomeIcon />
                                <Link to={"/home"} style={{color: "white"}}>Homepage</Link>
                            </li>
                            <li className='navbar__item'>
                                <RestaurantMenuIcon />
                                <Link to={"/shop/best-foods"} style={{color: "white"}}>Order Online</Link>
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
                    <div className='navbar--right'>
                        <div className='navbar__cart' onClick={toggleCart}>
                            <ShoppingCartIcon />
                            <div className='navbar__cart-qnt'>{user ? total : 0}</div>
                        </div>
                        {
                            user ? (
                                <div>
                                    <Avatar src={user.photoURL}/>
                                    <div className='navbar__username'>{user.displayName}</div>
                                    <ul className='navbar__account-options'>
                                        <li className='navbar__account-option'>
                                            <PermContactCalendarIcon />
                                            <span>My Account</span>
                                        </li>
                                        <li className='navbar__account-option' onClick={toggleWishList}>
                                            <LoyaltyOutlinedIcon />
                                            <span>My wishlist</span>
                                        </li>
                                        <li className='navbar__account-option' onClick={handleLogOut}>
                                            <ExitToAppIcon />
                                            <span>Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className='navbar__account' onClick={handleLogin}>
                                    <Avatar />
                                <div className='navbar__username navbar__username--sign-out'>
                                   Sign In
                                </div>
                             </div>
                            )
                        }
                      
                    </div>
                    
                </div>
            </Container>
       </header>

       <BurgerNavbar 
         isShow={isShowBurger}
         showBurgerNav={showBurgerNav}
         handleLogOut={handleLogOut}
         handleLogin={handleLogin}
         user={user}
       />

       <Cart />
        <Wishlist setIsShowWishList={setIsShowWishList}/>
        <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog}/>
    </>
  )
}

export default Header