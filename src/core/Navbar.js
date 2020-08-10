import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <Link className="navbar-brand text-white" to="/">
        <span className="fa fa-home"></span>
      </Link>
      <footer className="fixed-bottom">
        <a className="nav-link text-white text-center " href="/about">
          <span className="fa fa-info-square"></span> about
        </a>
      </footer>
    </Fragment>
  );
};
export default Navbar;
