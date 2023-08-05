import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        activeCategory: 0,
        categoriesArray: ['Все', 'Футболки', 'Шорты', 'Джинсы', 'Рубашки', 'Брюки']
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        }
    }
});

export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;