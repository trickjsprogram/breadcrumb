/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <div className="dropdown dropbtn">
          <i className="fa fa-caret-down icon"></i>
          <Link to="/news">
            <p>News</p>
          </Link>

          <div className="dropdown-content">
            <Link to="/news/react">React</Link>
            <Link to="/news/angular">Angular</Link>
            <Link to="/news/vue">Vue</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
