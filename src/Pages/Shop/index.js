import React, {useEffect, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "./styles.scss";
import {ApiContext} from '../../contexts/apiContext';
import {AuthContext} from '../../contexts/authContext';
import { Container } from '@material-ui/core';

import Banner from '../../Components/Banner';




const Shop = () => {
  const {setHasHeader} = useContext(AuthContext);
  const {name} = useParams();
  const history = useHistory();

  const {getProducts} = useContext(ApiContext);

  window.addEventListener('load', () =>{
    const params = history.location.search;
    if(params){
        const paramsObj = JSON.parse(
            '{"' +
            decodeURI(
              params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
            ) +
            '"}'
        );
        getProducts(name, paramsObj)
    }else{
        getProducts(name);
    };
  });


  useEffect(() =>{
    setHasHeader(true);
  }, [setHasHeader]);


  return (
    <section className='shop'>
        <Banner />
        <Container>
            <div className='shop__container'>
               {/* Content shop products */}
            </div>
        </Container>
    </section>
  )
}

export default Shop