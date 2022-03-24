import { createStore } from "redux";
// import reducerProduct from './product/reducer';
import reducerProduct from './product';
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(
    reducerProduct,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    devToolsEnhancer({trace: true})
);

export default store;
