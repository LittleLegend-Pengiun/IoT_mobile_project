import { createSlice } from "@reduxjs/toolkit"; 

export const pumpSlice = createSlice({
    name: 'pump',
    initialState: {
        value: "",
        init: false,
    },
    reducers: {
        updatePump: (state, action) => {
            state.value = action.payload;
            state.init = true;
        }
    }
});

export const { updatePump } = pumpSlice.actions;
export const getPumpInit = (state) => state.pump.init;
export const getPumpValue = (state) => state.pump.value;

export default pumpSlice.reducer;