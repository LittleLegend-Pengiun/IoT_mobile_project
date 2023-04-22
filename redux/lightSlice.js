import { createSlice } from "@reduxjs/toolkit"; 

export const lightSlice = createSlice({
    name: 'light',
    initialState: {
        value: [],
    },
    reducers: {
        updateLight: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateLight } = lightSlice.actions;
export const getLightInit = (state) => state.light.value.length? true: false;
export const getLightValue = (state) => state.light.value;

export default lightSlice.reducer;