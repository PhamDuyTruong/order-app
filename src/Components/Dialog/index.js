import React from 'react';
import { Button } from "@material-ui/core";

const Dialog = () => {
  return (
    <div className='dialog'>
        <div className='dialog__overlay'></div>
        <div className='dialog__wrapper'>
            <h2 className='dialog__title'>Join with us</h2>
            <p className='dialog__description'>
                Please sign in to use this our features 
            </p>
            <div className='dialog__btns'>
                <Button>Cancel</Button>
                <Button
                   variant="contained"
                   color="primary"
                   className="dialog__btn"
                >
                    Log in
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Dialog