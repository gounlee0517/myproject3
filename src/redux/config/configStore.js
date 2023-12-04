import { configureStore } from "@reduxjs/toolkit";
import letters from "../modules/letters";
import member from "../modules/member";
import authSlice from "../modules/authSlice";
import isLogined from "../modules/isLogined";

const store = configureStore({
  reducer: {
    letters: letters,
    member: member,
    authSlice: authSlice,
    isloginedSlice: isLogined,
  }
});

export default store;