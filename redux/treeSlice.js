import { createSlice } from "@reduxjs/toolkit";

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        value: []
    },
    reducers: {
        updateTree: (state, action) => {
            state.value = [{value: action.payload}]
        },
        initTree: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateTree, initTree } = treeSlice.actions;
export const getTreeInit = (state) => state.tree.value.length? true : false;
export const getTreeValue = (state) => {
    if (state.tree.value.length) {
        return state.tree.value[0].value;
    }
    return []
}

export default treeSlice.reducer;