import store from "./store/store";
import {productAdded, productMarkAsDiscount, productRemoved} from "./store/product";
// import {productAdded, productMarkAsDiscount, productRemoved} from "./store/product/action";

store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({
    name: "Product 1",
    price: 1500,
}));

store.dispatch(productAdded({
    name: "Product 2",
    price: 1000,
}));

store.dispatch(productRemoved({
    id: 2
}));

store.dispatch(productAdded({
    name: "Product 3",
    price: 500,
}));

store.dispatch(productMarkAsDiscount({ 
    id: 3,
    hasDiscount: true
}));

// console.log(store.getState())
