import React from 'react';
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = () => {
  return (
    <div className='cart-item'>
        <div className='cart-item__img'>
            <img src="" alt="Cart"/>
        </div>
        <div className='cart-item__content'>
            <div className='cart-item__name'></div>
            <div className='cart-item__price'></div>
            <div className='cart-item__handle'>
                <Button>
                    <RemoveIcon />
                </Button>
                <span className='cart-item__qnt'></span>
                <Button>
                    <AddIcon />
                </Button>
            </div>
        </div>
        <Button className='cart-item__rm'>
            <DeleteOutlineIcon />
        </Button>
    </div>
  )
}

export default CartItem