import { createSlice } from "@reduxjs/toolkit";

export const chosenChartSlice = createSlice({
    name: 'chosenChart',
    initialState: {
        value: "temp",
    },
    reducers: {
        choseChart: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { choseChart } = chosenChartSlice.actions;
export const getChartId = (state) => state.chosenChart.value;

export default chosenChartSlice.reducer;