import {useContext, useEffect, useState, createContext} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import foodApi from '../apis/foodApi';
import {setShopProducts} from '../Pages/Shop/shopSlice';
import {PrevFilterContext} from './PrevFilterContext';
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
    const {handlePrevious} = useContext(PrevFilterContext);
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
        const {prevPrice, prevRate, prevSearch} = handlePrevious;
        const currentPagination = params && params.hasOwnPropery('_page') && params['_page'];

        const valueWithPage = currentPagination && (prevPrice || JSON.parse(prevRate) || prevSearch);
        try{
            setIsLoading(true);
            const response = await foodApi.getAll(
                type, 
                isAtPhone ? {
                    ...params,
                    ...valueWithPage
                }
                : {
                    _limit: 16,
                    ...params,
                    ...valueWithPage
                }

            );

            const action = setShopProducts(response);
            dispatch(action);
            setIsLoading(false);
            currentPagination ? setPaginationActive(Number(currentPagination) - 1) : setPaginationActive(0);

            history.push({
                pathname: type,
                search: queryString.stringify(
                    isAtPhone ? {
                        ...params,
                        ...valueWithPage
                    } : {
                        _limit: 16,
                        ...params,
                        ...valueWithPage
                    }
                )
            })
        }catch(e){
            console.log(e.message);
        }
    };

    return (
        <ApiContext.Provider
           value={{
             isLoading,
             getProducts,
             totalRows,
             paginationActive
           }}
        >
            {children}
        </ApiContext.Provider>
    )

};

export {ApiContext};
export default ApiProvider;