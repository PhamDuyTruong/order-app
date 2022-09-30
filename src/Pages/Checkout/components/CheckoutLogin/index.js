import React from "react";
import "./style.scss";
import { Container } from "@material-ui/core";

import CommonButton from "../../../../Components/CommonButton";
import HandleImage from "../../../../Components/Banner/HandleImage";

import CheckoutLoginSvg from "../../../../assets/images/login.svg";

import "../../../../assets/styles/_typography.scss";

const CheckoutLogin = () => {
  return (
    <Container>
      <div className="checkout-login">
        <div className="primary-yellow-text">Join with us</div>
        <h2 className="primary-heading-text">
          You are not logged in. Please log in and try again!
        </h2>
        <CommonButton page="login" subClass="red">
          Login now
        </CommonButton>
        <img
          className="checkout-login__img"
          src={HandleImage(CheckoutLoginSvg)}
          alt="login"
        />
      </div>
    </Container>
  );
};

export default CheckoutLogin;
