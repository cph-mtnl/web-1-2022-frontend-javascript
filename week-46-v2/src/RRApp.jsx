import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";

function RRApp() {
  const buttons = [
    { buttonText: "Home", route: "/" },
    { buttonText: "About", route: "/about" },
    { buttonText: "Contact", route: "/contact" },
  ];

  return (
    <div>
      <nav>
        <Link key={"Home"} to={"/"}>
          Home
        </Link>
        <Link key={"Contact"} to={"/contact"}>
          Contact
        </Link>
        <Link key={"About"} to={"/about"}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="Home" />} exact />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<Contact title="Contact" />} />
        <Route element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default RRApp;
