import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CheckoutForm.scss";

import useFirestoreProducts from "../../../../hooks/useFirestoreProducts";
import { AuthContext } from "../../../../contexts/authContext";
import { setIsCheckout } from "../../../../Components/Header/headerSlice";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import CommonButton from "../../../../Components/CommonButton";
import Message from "../../../../Components/Message";
import CheckoutLoading from "./CheckoutLoading";
import CheckoutFormField from "./CheckoutFormField";
import CheckoutFormSelect from "./CheckoutFormSelect";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .matches(/^[a-z]+$/, "Must be only text"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .matches(/^[a-z]+$/, "Must be only text"),
  address: yup
    .string()
    .required("Please enter your adress")
    .matches(/^[a-z]+$/, "Must be only text"),
  country: yup.object().nullable(true).required("A country is required"),
  phone: yup
    .string()
    .required("A phone number is required")
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is not valid"),
});

const CheckoutForm = (props) => {
  const { setIsCheckoutSuccess, setIsPurchased } = props;
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);
  const { removeAllFromFirestore } = useFirestoreProducts();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = () => {
    if (cartProducts.length <= 0) {
      Message("warning");
      return;
    }
    reset({
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      phone: "",
    });
    setIsCheckoutSuccess(true);
    setIsLoading(true);
    removeAllFromFirestore(user.uid);
    setTimeout(() => {
      setIsCheckoutSuccess(false);
      setIsLoading(false);
      setIsPurchased(true);
    }, 1000);
  };

  const returnToShop = () => {
    const action = setIsCheckout(false);

    dispatch(action);
    history.push("/shop/best-foods");
  };

  useEffect(() => {
    cartProducts.length <= 0 ?? setIsCheckoutSuccess(false);
  }, [cartProducts]);

  return (
    <>
      <form onSubmit={handleSubmit(onHandleSubmit)} className="checkout-form">
        <h2 className="checkout-form__title">Shipping address</h2>
        <div className="checkout-form__fields">
          <div className="checkout-form__row">
            <CheckoutFormField
              label="First name"
              errors={errors}
              register={register}
              name="firstname"
            />
            <CheckoutFormField
              label="Last name"
              errors={errors}
              register={register}
              name="lastName"
            />
          </div>
          <CheckoutFormField
            label='Address'
            errors={errors}
            register={register}
            name='address'
          />
          <div className="checkout-form__row">
              <Controller 
                  name="country"
                  control={control}
                  render={({ field}) => (
                     <CheckoutFormSelect errors={errors}  field={field}/>
                  )}
              />
                <CheckoutFormField
              label='Phone'
              errors={errors}
              register={register}
              name='phone'
            />
          </div>
        </div>
        <div className="checkout-form__bottom">
            <div onClick={returnToShop} className='checkout-form__return'>
               <ChevronLeftIcon />
              <span>Return to shop</span>
           </div>
           <button type="submit">
                <CommonButton subClass="red">Checkout</CommonButton>
           </button>
        </div>
      </form>
      {isLoading && <CheckoutLoading />}
    </>
  );
};

export default CheckoutForm;
