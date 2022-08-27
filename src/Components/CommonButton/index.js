import React from 'react';
import { Button } from '@material-ui/core';
import "./styles.scss"

const CommonButton = (props) => {
  const {children} =props;
  return (
    <Button className='primary-btn'>
       {children}
    </Button>
  )
}

export default CommonButton