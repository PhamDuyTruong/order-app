import {useContext, useEffect, useState, createContext} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import foodApi from '../apis/foodApi';
import {setShopProducts} from '../Pages/Shop/shopSlice';
import {PHONE_BREAKPOINT} from '../constants/breakpoint';
import queryString from 'query-string';

const ApiContext = createContext();
const ApiProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [totalRows, setTotalRows] = useState(0);
    const [paginationActive, setPaginationActive] = useState(0);
    const [isAtPhone, setIsAtPhone] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const CheckIsAtPhone = () =>{
        if(window.innerWidth < PHONE_BREAKPOINT){
            setIsAtPhone(true);
        }else{
            setIsAtPhone(false);
        }
    };


    useEffect(() =>{
        window.addEventListener("resize", CheckIsAtPhone);

        return window.removeEventListener("resize", CheckIsAtPhone);
    }, []);


    useEffect(() =>{
        const getPagination = async () =>{
            const response = await foodApi.getAll('pagination');
            setTotalRows(response);
        };

        getPagination();
    }, []);

    const getProducts = async (type, params) =>{
        
    }

}