import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Space from "../Pages/Space";

const MainRoutes = () => {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden overflow-hidden">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/galaxy" element={<Space />} />
        </Routes>
    </div>
  );
};

export default MainRoutes;

      // <div className="absolute w-full h-full z-10">