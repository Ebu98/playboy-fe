import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import App from "../pages/app";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="side" element={<Sidebar/>} />
      <Route path="app/*" element={<App />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
