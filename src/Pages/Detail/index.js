import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import "./styles.scss";
import {AuthContext} from '../../contexts/authContext';
import foodApi from '../../apis/foodApi';

import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Banner from '../../Components/Banner';


const Detail = () => {
  const {name, id} = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const {setHasHeader} = useContext(AuthContext);

  useEffect(() =>{
        setHasHeader(true);
  }, [setHasHeader]);

  useEffect(() =>{
    const getProducts = async () =>{
        const res = await foodApi.getAll(name, {id: id});
        setSelectedProduct(res[0]);
    }
    getProducts();
  }, [name, id]);


  return (
    <div className='detail'>
        <Banner />
        <Container>
            <section className='detail__container'>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid xs={12} md={6}>
                        
                    </Grid>
                </Grid>
            </section>
        </Container>
    </div>
  )
}

export default Detail