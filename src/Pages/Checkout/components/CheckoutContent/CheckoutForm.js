import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import "./CheckoutForm.scss";

import useFirestoreProducts from '../../../../hooks/useFirestoreProducts';
import {AuthContext} from '../../../../contexts/authContext';
import {setIsCheckout} from '../../../../Components/Header/headerSlice';

import * as yup from 'yup';

// react hook form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import CommonButton from '../../../../Components/CommonButton';
import Message from '../../../../Components/Message';
import CheckoutLoading from './CheckoutLoading';
import CheckoutFormField from './CheckoutFormField';

const CheckoutForm = () => {
  return (
    <div>CheckoutForm</div>
  )
}

export default CheckoutForm