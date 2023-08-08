import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCount: 0,
        totalAmount: 0
    },
    reducers: {
        setItems: (state, action) => {
            const findItem = state.items.find(obj => {
                if (obj.id === action.payload.id && obj.activeSize === action.payload.activeSize) {
                    return obj
                }
            });

            findItem ? findItem.count++ : state.items.push(action.payload);

            state.totalCount = state.totalCount + 1;
            state.totalAmount += action.payload.price;
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalCount = 0;
        },

        deleteItems: (state, action) => {
            state.items = state.items.filter((item) => {
                if (item.id !== action.payload.id) {
                    return item
                } else {
                    state.totalAmount -= action.payload.price * action.payload.count;
                    state.totalCount -= action.payload.count;
                }
            });

        },
    }
});

export const { setItems, clearCart, deleteItems, incrementCount } = cartSlice.actions;
export default cartSlice.reducer;