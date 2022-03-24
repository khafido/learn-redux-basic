import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        addedProductToCart: (carts, action) => {
            return [
                ...carts,
                {
                    id: ++lastId,
                    product_id: action.payload.product_id,
                    quantity: action.payload.quantity,
                }
            ];
        },
        removedProductFromCart: (carts, action) => {
            return carts.filter(cart => cart.id !== action.payload.id);
        }
    }
});

export const { addedProductToCart, removedProductFromCart } = slice.actions;
export default slice.reducer;