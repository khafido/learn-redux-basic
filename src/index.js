import store from "./store/store";
import {
    productAdded, 
    productMarkAsDiscount, 
    productRemoved
} from "./store/product";

import {userAdded, userRemoved} from "./store/user";
import { addedProductToCart, removedProductFromCart } from "./store/cart";

// import {productAdded, productMarkAsDiscount, productRemoved} from "./store/product/action";

// store.subscribe(() => {
//     console.log('Store changed!', store.getState());
// });

// Products
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

// Users
store.dispatch(userAdded({
    name: "User 1",
}));

store.dispatch(userAdded({
    name: "User 2",
}));

store.dispatch(userRemoved({
    user_id: 2
}));

store.dispatch(userAdded({
    name: "User 3",
}));


// Cart
store.dispatch(addedProductToCart({
    product_id:1,
    quantity:2
}));

store.dispatch(addedProductToCart({
    product_id:2,
    quantity:3
}));

store.dispatch(removedProductFromCart({
    id:1
}));

store.dispatch({
    type: 'apiRequest',
    payload: {
        url: 'https://fakestoreapi.com/products',
        method: 'GET',
        onSuccess: 'onsuccess',
        onError: 'onerror'
    }
})