import { createSlice } from "@reduxjs/toolkit";

const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        clothes: []
    },
    reducers: {
        updateClothes: (state, action) => {
            state.clothes = action.payload;
        }
    }
});

export const { updateClothes } = clothesSlice.actions;
export default clothesSlice.reducer;