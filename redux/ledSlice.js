import { createSlice } from "@reduxjs/toolkit";

export const ledSlice = createSlice({
    name: 'led',
    initialState: {
        value: "NaN",
        init: false,
    },
    reducers: {
        updateLed: (state, action) => {
            state.value = action.payload;
            state.init = true;
        }
    }
});

export const { updateLed } = ledSlice.actions;
export const getLedInit = (state) => state.led.init;
export const getLedValue = (state) => state.led.value;

export default ledSlice.reducer;