import React from 'react';
import {PRIMARY_WHITE_COLOR} from '../../constants/color';
import {PHONE_BREAKPOINT, TABLET_BREAKPOINT} from '../../constants/breakpoint';
import HandleImage from '../../Components/Banner/HandleImage';
import styled from "styled-components";


const EmptyCartContainer = styled.div`
      position: ${(p) => p.type === "shop" && "absolute"};
      left: ${(p) => p.type === "shop" && 0};
      right: ${(p) => p.type === "shop" && 0};
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: ${(p) => (p.type === "shop" || p.type === "wishlist") && "100%"};
      margin-top: ${(p) => p.type === "shop" && "-35px"};
      margin-bottom: ${(p) => p.type === "wishlist" ? "0" : "40px"};
      img{
        width: ${(p) => p.type==="shop" ? "23.5rem" : p.type==="wishlist" ? "14.5rem" : "20.5rem"};
        margin-bottom: ${(p) => p.type==="wishlist" ? "20px": "35px"};
        @media (max-width: ${TABLET_BREAKPOINT}px) {
          width: ${(p) => p.type === "wishlist" && "25.5rem"};
          margin-bottom: ${(p) => p.type === "wishlist" && "35px"};
        }
        @media (max-width: ${PHONE_BREAKPOINT}px) {
          width: 15.5rem;
          margin-bottom: 25px;
        }
      }
      h2{
        font-size: ${(p) => p.type === "wishlist" ? "1.65rem" : "2.1rem"};
        text-transform: capitalize;
        color: ${(p) => p.type === "checkout" && PRIMARY_WHITE_COLOR};
        @media (max-width: ${TABLET_BREAKPOINT}px) {
          font-size: ${(p) => p.type === "wishlist" && "2.1rem"};
        }
        @media (max-width: ${PHONE_BREAKPOINT}px) {
          font-size: 1.8rem;
        }
      }

`

const EmptyCart = (props) => {
  const {src, type} = props;
  return (
    <EmptyCartContainer type={type}>
        <img src={HandleImage(src)} alt="empty-cart"/>
        <h2>Your {type==="wishlist" ? "wishlist": "cart"} is empty</h2>
    </EmptyCartContainer>
  )
}

export default EmptyCart