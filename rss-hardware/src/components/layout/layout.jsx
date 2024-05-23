import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="children">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
