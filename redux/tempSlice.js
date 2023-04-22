import { createSlice } from "@reduxjs/toolkit"; 

export const tempSlice = createSlice({
    name: 'temp',
    initialState: {
        value: [],
    },
    reducers: {
        updateTemp: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateTemp } = tempSlice.actions;
export const getTempInit = (state) => state.temp.value.length? true: false;
export const getTempValue = (state) => state.temp.value;

export default tempSlice.reducer;