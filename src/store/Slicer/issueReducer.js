import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 3456789
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;


