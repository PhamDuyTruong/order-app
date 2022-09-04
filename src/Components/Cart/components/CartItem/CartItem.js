import React from 'react';
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import HandleImage from '../../../Banner/HandleImage';


const CartItem = (props) => {
   const {product} = props;
   const {id, img,  name, price, qnt} = product;
  return (
    <div id={id} className='cart-item'>
        <div className='cart-item__img'>
            <img src={HandleImage(img)} alt="Cart"/>
        </div>
        <div className='cart-item__content'>
            <div className='cart-item__name'>{name}</div>
            <div className='cart-item__price'>${price}</div>
            <div className='cart-item__handle'>
                <Button>
                    <RemoveIcon />
                </Button>
                <span className='cart-item__qnt'>{qnt}</span>
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