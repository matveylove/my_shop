import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        paginationCount: 1,
        paginationArray: [1, 2, 3, 4]
    },
    reducers: {
        setPaginationCount: (state, action) => {
            state.paginationCount = action.payload;
        }
    }
});

export const { setPaginationCount } = paginationSlice.actions;
export default paginationSlice.reducer;