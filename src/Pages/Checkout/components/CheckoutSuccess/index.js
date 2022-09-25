import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setShopProducts } from "../../../Shop/shopSlice";
import foodApi from "../../../../apis/foodApi";
import { Container } from "@material-ui/core";

import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

import { setIsCheckout } from "../../../../Components/Header/headerSlice";

const CheckoutSuccess = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const moveToShop = () => {
    const checkoutAction = setIsCheckout(false);
    const getProducts = async (type, query) => {
      const res = await foodApi.getAll(type, query);
      const foodAction = setShopProducts(res);
      dispatch(foodAction);
    };
    dispatch(checkoutAction);
    history.push("/shop/our-foods?_limit=16");
    getProducts("our-foods", { _limit: 16 });
  };
  return (
    <Container>
      <div className="checkout-success">
        <div className="checkout-success__container">
          <div className="checkout-success__background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="checkout-success__shadow"></div>
        </div>
        <h2 className="checkout-success__title">You buy successfully !!!</h2>
        <div onClick={moveToShop} className="checkout-success__btn">
          <ShoppingBasketOutlinedIcon />
          <span>Buy more</span>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutSuccess;
