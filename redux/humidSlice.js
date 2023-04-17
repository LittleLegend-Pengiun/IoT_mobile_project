import { createSlice } from "@reduxjs/toolkit"; 

export const humidSlice = createSlice({
    name: 'humid',
    initialState: {
        value: [],
    },
    reducers: {
        updateHumid: (state, action) => {
            state.value = [...action.payload];
        }
    }
})

export const { updateHumid } = humidSlice.actions;
export const getHumidInit = (state) => state.humid.value.length? true: false;
export const getHumidValue = (state) => state.humid.value;

export default humidSlice.reducer;