/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slotSlice = createSlice({
    name: 'slot',
    initialState: {
        date: 0,
    },
    reducers: {
        setDateRedux: (state, action) => {
            state.date = action.payload;
        },
    },
});

export const { setDateRedux } = slotSlice.actions;

export default slotSlice.reducer;
