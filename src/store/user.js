import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        userAdded: (users, action) => {
            return [
                ...users,
                {
                    user_id: ++lastId,
                    name: action.payload.name,
                }
            ];
        },
        userRemoved: (users, action) => {
            return users.filter(user => user.user_id !== action.payload.user_id);
        }
    }
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;