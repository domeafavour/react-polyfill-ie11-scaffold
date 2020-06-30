import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" exact>Home</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
