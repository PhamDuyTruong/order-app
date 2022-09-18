import React, {useContext, useState} from 'react';
import "./DetailContent.scss";

import {AuthContext} from '../../../../contexts/authContext';
import { Button } from '@material-ui/core';

import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import Checkbox from '../../../../Components/Checkbox';
import Dialog from '../../../../Components/Dialog';
import CommonButton from '../../../../Components/CommonButton';
import Message from '../../../../Components/Message';

const DetailContent = (props) => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const {
        product,
        paramsName,
        dataOptions,
        handleFuncs,
        selectedRadio,
        price,
        qnt,
        handleAddToFirestore,
      } = props;

      const { name, country, dsc, rate } = product ? product : '';
      const { handleOptionChange, handleIncreaseQnt, handleDecreaseQnt } =handleFuncs;
      const {user} = useContext(AuthContext);

  return (
    <div>DetailContent</div>
  )
}

export default DetailContent