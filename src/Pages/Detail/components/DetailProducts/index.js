import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./styles.scss"

import foodApi from '../../../../apis/foodApi';
import {setDetailProducts} from '../../detailSlice';

import FoodProducts from '../../../../Components/FoodProducts';
import Dialog from '../../../../Components/Dialog';

import "../../../../assets/styles/_typography.scss";


const DetailProducts = () => {
   const {name, id} = useParams();

   const [products, setProducts] = useState([]);
   const [isShowDialog, setIsShowDialog] = useState(false);

   const dispatch = useDispatch();
   const productData = useSelector((state) => state.detail);

   useEffect(() =>{
        const getProducts = async (type) =>{
            const res = await foodApi.getAll(type);
            const action = setDetailProducts(res);
            dispatch(action);
        };

        getProducts(name);
   }, [name, dispatch]);

   useEffect(() =>{
        if(productData.length <= 0) return;
        const products = productData.filter((product) => product.id !== id);

        const randomProducts = [];
        for(let i = 0; i < 5; i++){
            const num = Math.floor(Math.random() * products.length);
            randomProducts.push(products[num]);
            products.splice(num, 1);
        };
        setProducts(randomProducts);
   }, [productData, id]);

   const toggleDialog = () =>{
    setIsShowDialog(true);
   };

   const moveToTop = () =>{
    window.scrollTo({
        top: 250,
        behavior: "smooth"
    });
   };


  return (
    <div className='detail-products'>
       <div className='primary-yellow-text'>Best foods</div>
      <h2 className='primary-heading-text'>Related Products</h2>
      <div className='detail-products__wrapper'>
        {products &&
          products.map((item) => (
            <FoodProducts
              moveToTop={moveToTop}
              toggleDialog={toggleDialog}
              key={item.id}
              {...item}
            />
          ))}
      </div>
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </div>
  )
}

export default DetailProducts