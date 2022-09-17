import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import "./ShopPagination.scss";

import {ApiContext} from '../../../../contexts/apiContext';
import {PrevFilterContext} from '../../../../contexts/PrevFilterContext';

import foodApi from '../../../../apis/foodApi'

import ReactPaginate from 'react-paginate';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ShopPagination = () => {
   const [filterProductsLen, setFilterProductsLen] = useState(0);
   const {name} = useParams();

   const { handlePrevious } = useContext(PrevFilterContext);
   const { getProducts, totalRows, paginationActive } = useContext(ApiContext);
   const { prevPrice, prevRate, prevSearch } = handlePrevious();

   const maxPage = prevPrice || prevRate || prevSearch ? Math.ceil(filterProductsLen / 16) : Math.ceil(totalRows[name] / 16);

   useEffect(() =>{
     const getFilterProductsLen = async () =>{
        if(prevPrice || prevRate || prevSearch){
            const res = await foodApi.getAll(
                name, 
                prevPrice || JSON.parse(prevRate) || prevSearch
            );
            setFilterProductsLen(res.length);
        }
     };

     getFilterProductsLen();
   }, [name, prevPrice, prevRate, prevSearch]); 

    const handlePagination = (page) =>{
            const {selected} = page;
            const params = {
                _page: selected + 1
            };
            handlePagination('pagination');
            getProducts(name, params);
    };
 
  return (
    <ReactPaginate
    previousLabel={<NavigateBeforeIcon />}
    nextLabel={<NavigateNextIcon />}
    pageCount={maxPage}
    pageRangeDisplayed={3}
    onPageChange={handlePagination}
    marginPagesDisplayed={1}
    containerClassName={'shop-pagination'}
    forcePage={paginationActive}
    >
    </ReactPaginate>
  )
}

export default ShopPagination