import React from 'react';
import { Button } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import "./styles.scss"


const Wishlist = () => {
  return (
    <div className='wishlist'>
        <div className='wishlist__top'>
            <div className='wishlist__shop'>
                <RadioOutlinedIcon />
                <span>Your wishlist</span>
            </div>
            <Button>
                <ExitToAppOutlinedIcon />
            </Button>
        </div>

        <div className='wishlist__items'>
            
        </div>
    </div>
  )
}

export default Wishlist