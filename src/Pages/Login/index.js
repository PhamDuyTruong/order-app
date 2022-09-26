import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { googleProvider, auth } from "../../config/firebaseConfig";
import { AuthContext } from "../../contexts/authContext";
import { Button, Container } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";

import LoginThumbSvg from "../../assets/images/thumb.svg";
import googleSvg from "../../assets/images/google.svg";

import Message from "../../Components/Message";
import HandleImage from "../../Components/Banner/HandleImage";
import "./style.scss";

const Login = () => {
  const history = useHistory();
  const { setHasHeader } = useContext(AuthContext);
  const handleGooglelogIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        history.goBack();
        setHasHeader(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlePageClose = () => {
    Message("closed");
  };

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);
  return (
    <section className="login">
      <Container>
        <div className="login__container">
          <div
            className="login__thumb"
            style={{
              backgroundImage: `url(${HandleImage(LoginThumbSvg)})`,
            }}
          ></div>

          <div className="login__content">
            <h2>JOIN WITH US</h2>
            <div className="login__msg">
              <span>Don't have an account? </span>
              <span onClick={handlePageClose} className="login__msg-btn">
                <strong>Create an account</strong>
              </span>
            </div>

            <div className='login__separate'>
              <span className='login__separate-text'>OR</span>
            </div>
            <div className="login__options">
              <Button
                onClick={handleGooglelogIn}
                variant='contained'
                className='login__option login__option--gg'>
                <img src={googleSvg} alt='google icon' />
                Log in with Google
              </Button>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
