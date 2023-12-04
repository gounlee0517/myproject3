import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
}

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        initialData: (state, action) => {
            return {data: action.payload}
        },
        addData: (state, action) => {
            return {data: [...state.data, action.payload]}
        }
    }
})

export default dataSlice.reducer;
export const { initialData, addData} = dataSlice.actions;