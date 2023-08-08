import { configureStore } from "@reduxjs/toolkit";
// slices
import clothesSlice from "../slices/clothesSlice";
import sortSlice from "../slices/sortSlice";
import categorySlice from "../slices/categorySlice";
import searchSlice from "../slices/searchSlice";
import paginationSlice from "../slices/paginationSlice";
import cartSlice from "../slices/cartSlice";

export const store = configureStore({
    reducer: {
        clothes: clothesSlice,
        sort: sortSlice,
        category: categorySlice,
        search: searchSlice,
        pagination: paginationSlice,
        cart: cartSlice,
    }
})