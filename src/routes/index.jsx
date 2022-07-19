import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import SidebarButton from "../components/sidebar/sidebar-button";
import App from "../pages/app";
import HomePage from "../pages/app/home";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="nav" element={<Navbar/>} />
      <Route path="side" element={<SidebarButton/>} />
      <Route path="home" element={<HomePage/>} />
      <Route path="app/*" element={<App />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
