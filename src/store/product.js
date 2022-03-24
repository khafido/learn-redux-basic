import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// // ActionTypes
// export const PRODUCT_ADDED = "productAdded";
// export const PRODUCT_REMOVED = "productRemoved";
// export const PRODUCT_MARK_AS_DISCOUNT = "productMarkAsDiscount";

// // Action 
// export const productAdded = createAction(PRODUCT_ADDED);
// export const productMarkAsDiscount = createAction(PRODUCT_MARK_AS_DISCOUNT);
// export const productRemoved = createAction(PRODUCT_REMOVED);

// // Reducer
// let lastId = 0;
// const initialState = [];

// export default createReducer(initialState, {
//     [PRODUCT_ADDED]: (state, action) => {
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 name: action.payload.name,
//                 price: action.payload.price,
//                 hasDiscount: action.payload.hasDiscount || false,
//             }
//         ];
//     },
//     [PRODUCT_MARK_AS_DISCOUNT]: (state, action) => {
//         return state.map(product =>
//             product.id !== action.payload.id ?
//             product : {
//                 ...product,
//                 hasDiscount: action.payload.hasDiscount
//             }
//         );
//     },
//     [PRODUCT_REMOVED]: (state, action) => {
//         return state.filter(product => product.id !== action.payload.id);
//     }
// });

let lastId = 0;
const initialState = [];

// Slice
const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        productAdded: (products, action) => {
            return [
                ...products,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasDiscount || false,
                }
            ];
        },
        productMarkAsDiscount: (products, action) => {
            return products.map(product =>
                product.id !== action.payload.id ?
                product : {
                    ...product,
                    hasDiscount: action.payload.hasDiscount
                }
            );
        },
        productRemoved: (products, action) => {
            return products.filter(product => product.id !== action.payload.id);
        }
    }
});

export const { productAdded, productMarkAsDiscount, productRemoved } = slice.actions;
export default slice.reducer;
