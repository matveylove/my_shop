import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getClothes = createAsyncThunk(
    'clothes/getClothes',
    async ({ category, sort, paginationCount }, thunkAPI) => {
        const response = await axios.get(`https://64c8c994a1fe0128fbd635d0.mockapi.io/clothes?page=${paginationCount}&limit=9&${category}${sort}`)
        return thunkAPI.fulfillWithValue(response.data);
    }
)

const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        clothes: [],
        isLoading: false,
        status: 'pending'
    },
    reducers: {
        updateClothes: (state, action) => {
            state.clothes = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getClothes.pending, (state) => {
            state.isLoading = true;
            state.clothes = [];
            state.status = 'pending';
        });
        builder.addCase(getClothes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.clothes = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(getClothes.rejected, (state) => {
            console.log('error');
            state.isLoading = false;
            state.clothes = [];
            state.status = 'rejected';
        });
    }
});

export const { updateClothes, setIsLoading } = clothesSlice.actions;
export default clothesSlice.reducer;