import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    isShowWishList: false,
    wishListProducts: []
};


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishList: (state, action) =>{
            return (state = {...state, wishListProducts: action.payload})
        },
        setIsShowWishList: (state, action) =>{
            return (state = {...state, isShowWishList: action.payload});
        }
    }
});

const {reducer, actions} = wishlistSlice;

export const {addToWishList, setIsShowWishList} = actions;
export default reducer;