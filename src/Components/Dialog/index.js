import React from 'react';
import { Button } from "@material-ui/core";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const Dialog = (props) => {
  const {setIsShow, isShow} = props;
  const history = useHistory();

  const hideDialog = () =>{
    setIsShow(false);
  };

  const moveToLogin = () =>{
    setIsShow(false);
    history.push('/login')
  }
  return (
    <div className={isShow ? "dialog show" : "dialog"}>
        <div onClick={hideDialog} className='dialog__overlay'></div>
        <div className='dialog__wrapper'>
            <h2 className='dialog__title'>Join with us</h2>
            <p className='dialog__description'>
                Please sign in to use this our features 
            </p>
            <div className='dialog__btns'>
                <Button onClick={hideDialog} className="dialog__btn">Cancel</Button>
                <Button
                   variant="contained"
                   color="primary"
                   className="dialog__btn"
                   onClick={moveToLogin}
                >
                    Log in
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Dialog