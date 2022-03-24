import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";// import reducerProduct from './product/reducer';

const store = configureStore({
    reducer
});

export default store;
