import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand text-white" to="/">
        Home
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-white" href="/about">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
