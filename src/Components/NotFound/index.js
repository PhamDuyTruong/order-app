import React from 'react';
import "./styles.scss";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Container } from '@material-ui/core';

import NotFoundImg from '../../assets/images/NotFound/404.svg';

const NotFound = () => {
  return (
    <Container>
        <div className='not-found'>
            <span className='not-found__caption'>404</span>
            <h2 className='not-found__heading'>Oops... Page not found</h2>
            <div className='not-found__img'>
                <img src={NotFoundImg} alt="img"/>
            </div>
            <div className='not-found__return'>
                <ChevronLeftIcon />
                <span>Return to Home</span>
            </div>
        </div>
    </Container>
  )
}

export default NotFound