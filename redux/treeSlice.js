import { createSlice } from "@reduxjs/toolkit";

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        value: "",
        init: false,
    },
    reducers: {
        updateTree: (state, action) => {
            state.value = action.payload;
            state.init = true;
        }
    }
});

export const { updateTree } = treeSlice.actions;
export const getTreeInit = (state) => state.tree.init;
export const getTreeValue = (state) => state.tree.value;

export default treeSlice.reducer;