import React, { useContext } from "react";
import "./CheckoutUserInfo.scss";

import { Avatar, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import { AuthContext } from "../../../../contexts/authContext";
import { auth } from "../../../../config/firebaseConfig";

const CheckoutUserInfo = () => {
  const { user, setUser } = useContext(AuthContext);
  const { displayName, email, photoUrl } = user || "";
  const logOut = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };
  return (
    <div className="checkout-user-info">
      <h2 className="checkout-user-info__title">Contact information</h2>
      <div className="checkout-user-info__container">
        <Avatar src={photoUrl} alt="Photo" />
        <div className="checkout-user-info__content">
          <span className="checkout-user-info__name">{displayName}</span>
          {email && <span className="checkout-user-info__email">{email}</span>}
          <div onClick={logOut} className="checkout-user-info__btn">
            Log out
          </div>
        </div>
      </div>
      <FormControlLabel
        className='checkout-user-info__msg'
        control={<Checkbox color='primary' />}
        label='Keep me up to date on news and offers'
      />
    </div>
  );
};

export default CheckoutUserInfo;
