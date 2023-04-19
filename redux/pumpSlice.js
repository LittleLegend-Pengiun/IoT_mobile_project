import { createSlice } from "@reduxjs/toolkit"; 

export const pumpSlice = createSlice({
    name: 'pump',
    initialState: {
        value: []
    },
    reducers: {
        updatePump: (state, action) => {
            state.value = [...[{value: action.payload}]]
        },
        initPump: (state, action) => {
            state.value = [...action.payload];
        }
    }
});

export const { updatePump, initPump } = pumpSlice.actions;
export const getPumpInit = (state) => state.pump.value.length? true : false;
export const getPumpValue = (state) => {
    if (state.pump.value.length) {
        return state.pump.value[0].value;
    }
    return []
}

export default pumpSlice.reducer;