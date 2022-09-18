import { configureStore } from "@reduxjs/toolkit";

import headerReducer from '../Components/Header/headerSlice';
import wishlistReducer from '../Components/Wishlist/wishlistSlice';
import cartReducer from '../Components/Cart/cartSlice';
import shopReducer from '../Pages/Shop/shopSlice';
import detailReducer from '../Pages/Detail/detailSlice'

const rootReducer = {
    header: headerReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    shop: shopReducer,
    detail: detailReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;