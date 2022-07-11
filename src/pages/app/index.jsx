import React, { Fragment } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";

const App = () => {
  return (
    <Fragment>
      <Outlet />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
