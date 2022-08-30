import { configureStore } from "@reduxjs/toolkit";

import headerReducer from '../Components/Header/headerSlice';
import wishlistReducer from '../Components/Wishlist/wishlistSlice';
import cartReducer from '../Components/Cart/cartSlice'

const rootReducer = {
    header: headerReducer,
    wishlist: wishlistReducer,
    cart: cartReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;