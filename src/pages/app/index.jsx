import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SidebarButton from "../../components/sidebar/sidebar";
import Home from "./home";
import Navbar from "../../components/navbar/navbar";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <SidebarButton />
      <main>
      
        <Navbar />
        <Outlet />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
