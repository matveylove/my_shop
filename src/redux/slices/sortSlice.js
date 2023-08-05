import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        acitveSort: 0,
        sortType: {
            type: 'nosort',
            desc: 'desc',
            title: 'Без сортировки',
        },
        sortArray: [
            {
                type: 'nosort',
                desc: 'desc',
                title: 'Без сортировки',
            },
            {
                type: 'price',
                desc: 'desc',
                title: 'По убываю цены (desc)',
            },
            {
                type: 'price',
                desc: 'asc',
                title: 'По возрастанию цены (desc)',
            },
            {
                type: 'rating',
                desc: 'desc',
                title: 'По рейтингу',
            }
        ]
    },
    reducers: {
        setActiveSort: (state, action) => {
            state.acitveSort = action.payload;
        },
        setSortType: (state, action) => {
            state.sortType = action.payload;
        }
    }
})

export const { setActiveSort, setSortType } = sortSlice.actions;
export default sortSlice.reducer;