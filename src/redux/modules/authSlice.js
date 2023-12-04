import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    password: '',
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLoginInfo: (state, action) => {
            return (action.payload)
        }
    }
});

export const {setLoginInfo} = authSlice.actions;
export default authSlice.reducer;