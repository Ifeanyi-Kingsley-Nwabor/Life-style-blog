import React from "react";
import { Navbar } from "react-bootstrap";
import bkk from "../img/bkk.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="NavBarcontainer">
        <Navbar.Brand className="logobtn bkk" href="#home">
          <img src={bkk} alt="" />
        </Navbar.Brand>
        <NavLink to="/" className="navbtns">
          Home
        </NavLink>

        <NavLink to="/about" className="navbtns">
          About us
        </NavLink>

        <NavLink to="/trending" className="navbtns">
          Trending
        </NavLink>

        <NavLink to="/authors" className="navbtns">
          Authors
        </NavLink>

        <NavLink
          to="/contact"
          className="navbtns"
          activeClassName="special-link"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
