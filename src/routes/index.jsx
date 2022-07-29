import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import App from "../pages/app";
import HomePage from "../pages/app/home";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Library from "../pages/app/library/library"
import Test from "../components/test";
import PlayList from "../pages/app/playLists/playlist";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="nav" element={<Navbar/>} />
      <Route path="na" element={<Test/>} />
      <Route path="libry" element={< Library/>}/>
      <Route path="play" element={<PlayList/>}/>
      <Route path="side" element={<Sidebar/>} />
      <Route path="home" element={<HomePage/>} />
      <Route path="app/*" element={<App />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
