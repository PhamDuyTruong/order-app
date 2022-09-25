import React from 'react';
import PRIMARY_RED_COLOR from '../../../../constants/color';

import { CircularProgress } from "@material-ui/core";

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index:999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.75);
`

const CheckoutLoading = () => {
  return (
    <Container>
        <CircularProgress 
               thickness={4}
               size={55}
               style={{color: PRIMARY_RED_COLOR}}
        />
    </Container>
  )
}

export default CheckoutLoading