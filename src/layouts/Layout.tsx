import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>soy el layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
