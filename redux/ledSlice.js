import { createSlice } from "@reduxjs/toolkit";

export const ledSlice = createSlice({
    name: 'led',
    initialState: {
        value: [],
    },
    reducers: {
        updateLed: (state, action) => {
            state.value = [...[{value: action.payload}]];
        },
        initLed: (state, action) => {
            state.value = [...action.payload];
        }
    }
});

export const { updateLed, initLed } = ledSlice.actions;
export const getLedInit = (state) => state.led.value.length? true : false;
export const getLedValue = (state) => {
    if (state.led.value.length) {
        return state.led.value[0].value;
    }
    return []
};

export default ledSlice.reducer;