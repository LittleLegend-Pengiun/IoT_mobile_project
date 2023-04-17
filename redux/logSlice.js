import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
    name: 'log',
    initialState: {
        value: [],
    },
    reducers: {
        pushData: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
});

export const getLogData = (state) => state.log.value;

export default logSlice.reducer;