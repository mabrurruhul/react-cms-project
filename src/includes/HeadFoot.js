import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import MainMenu from "./Mainmenu";
import Footer from "./Footer";



export default function HeadFoot() {
  const location = useLocation();

    const isMainUrl = location.pathname === "/";
  return (
    
      <>
      <MainMenu/>

      <Outlet/>
      
      <Footer/>
      </>
    
  )
}
