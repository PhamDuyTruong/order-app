import React from "react";
import { Checkbox } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import CommonButton from "../../../../Components/CommonButton";
import HandleImage from "../../../../Components/Banner/HandleImage";
import "./style.scss";
import Message from "../../../../Components/Message";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "This is not valid email format"
    ),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password should be 8 chars minimum and at least 1 number"
    ),
});

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = () => {
    reset({
      email: "",
      password: "",
    });
    Message("closed");
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="form-login">
        
      <div className="form-login__commit">
        <Checkbox color="primary" className="form-login__commit-checkbox" />
        <span className="form-login__commit-msg">Save your password</span>
      </div>

      <button type="submit" className="form-login__btn">
        <CommonButton subClass="red">Log in</CommonButton>
      </button>
    </form>
  );
};

export default LoginForm;
