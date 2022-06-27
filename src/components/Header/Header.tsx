import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="flex justify-content-center">
      <img className="logo" src={logo} alt="logo" />
    </header>
  );
};
