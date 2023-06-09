import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
