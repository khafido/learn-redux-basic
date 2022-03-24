import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './product';
import userReducer from './user';
import cartReducer from './cart';

export const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer
});