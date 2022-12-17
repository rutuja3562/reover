import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import {Login } from "./Login";
import { Register } from "./Register";

export const AllRoutes = () => {
  return (
    <div width="100%">
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
