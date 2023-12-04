import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined : false,
}

const isloginedSlice = createSlice({
    name: "islogin",
    initialState: initialState,
    reducers: {
        setIsLogined : (state, action) => {
            return {isLogined: action.payload}
        }
    }
});

export const {setIsLogined} = isloginedSlice.actions;
export default isloginedSlice.reducer;