import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../components/Login/Signup";
import { useSelector } from "react-redux";

const Router = () => {
  const isLogined = useSelector((state) => state.isloginedSlice.isLogined);

  return (
    <BrowserRouter>
      <Routes>
        {isLogined ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<Detail />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
