import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "./ShopHandle.scss";

import {filterShopByOrder, setShopProductsView} from '../../shopSlice';
import {ApiContext} from '../../../../contexts/apiContext';
import {PrevFilterContext} from '../../../../contexts/PrevFilterContext';
import SearchIcon from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const dataFake = [
    {
      value: 'Price: Low to High',
      sort: 'price_lth',
    },
    {
      value: 'Price: High to Low',
      sort: 'price_htl',
    },
    {
      value: 'Rate: Low to High',
      sort: 'rate_lth',
    },
    {
      value: 'Rate: High to Low',
      sort: 'rate_htl',
    },
];
  

const ShopHandle = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [isDrop, setIsDrop] = useState(false);

  const ref = useRef();

  const dispatch = useDispatch();
  const {getProducts} = useContext(ApiContext);
  const {handlePrevious} = useContext(PrevFilterContext);
  const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrevious();
  const { shopProductsView } = useSelector((state) => state.shop);

  useEffect(() =>{
    const handleClickDrop = (e) =>{
            const el = ref.current;
            
      if (el && el.contains(e.target)) {
        setIsDrop(!isDrop);
      } else {
        setIsDrop(false);
      }
    };
    window.addEventListener("click", handleClickDrop);

    return window.removeEventListener('click', handleClickDrop);
  }, []);

  const handleSearch = (e) =>{
    handlePrevious('search');
    e.preventDefault();

    if(!inputValue) return;
    const query = {name_like: inputValue};
    getProducts('our-foods', query);
    setInputValue('');
    setPrevSearch(query);
  };

  const onFilterBySort = (sort, value) =>{
    handlePrevious('sort');
    const action = filterShopByOrder(sort);

    dispatch(action);
    setSelectedDrop(value);
  };

  const handleSetShopProductsView = (type) =>{
        const action = setShopProductsView(type);
        dispatch(action);
  };

  return (
    <div className='shop-handle'>
        <form onSubmit={handleSearch} className="shop-handle__search">
             <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search your Food"
             />
             <button className='shop-handle__search-btn'>
                <SearchIcon />
             </button>
        </form>
        <div className='shop-hanlde__drop'>
            <div ref={ref} className="shop-handle__drop-current">
                <span>{selectedDrop}</span>
                <ExpandMoreIcon />
            </div>
            <ul
                 className={
                    isDrop ? 'shop-handle__drop-list drop' : 'shop-handle__drop-list'
                  }
            >
                {dataFake.map((item, index) =>(
                    <li
                       key={index}
                       onClick = {() => onFilterBySort(item.sort, item.value)}
                       className='shop-handle__drop-item'
                    >
                      {item.value}
                    </li>
                ))}
            </ul>
        </div>

        <div className='shop-handle__display-types'>
             <ViewList 
                     onClick={() => handleSetShopProductsView('list')}
                     className={`shop-handle__display-type ${
                       shopProductsView === 'list' && 'active'
                     }`}
             />
             <ViewModuleIcon 
                     onClick={() => handleSetShopProductsView('grid')}
                     className={`shop-handle__display-type ${
                       shopProductsView === 'grid' && 'active'
                     }`}
             />
        </div>
    </div>
  )
}

export default ShopHandle