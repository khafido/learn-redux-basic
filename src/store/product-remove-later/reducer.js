import * as actions from "./actionType";

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasDiscount || false,
                }
            ];
            
        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);

        case actions.PRODUCT_MARK_AS_DISCOUNT:
            return state.map(product => 
                product.id !== action.payload.id ? 
                product : {
                    ...product,
                    hasDiscount: action.payload.hasDiscount
                }
            );
    
        default:
            return state;
    }
}
