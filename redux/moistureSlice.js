import { createSlice } from "@reduxjs/toolkit"; 

export const moistureSlice = createSlice({
    name: 'moisture',
    initialState: {
        value: [],
    },
    reducers: {
        updateMoisture: (state, action) => {
            state.value = [...action.payload];
        }
    }
})

export const { updateMoisture } = moistureSlice.actions;
export const getMoistureInit = (state) => state.moisture.value.length? true: false;
export const getMoistureValue = (state) => state.moisture.value;

export default moistureSlice.reducer;