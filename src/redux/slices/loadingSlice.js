import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;