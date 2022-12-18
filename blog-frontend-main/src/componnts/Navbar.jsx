import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="res-navbar">
        <div className="heading">
          <Link to="/" className="link-text heading-the">
            <span >The</span>
          </Link>
          <Link to="/" className="link-text">
            <span className="heading-siren">Siren</span>
          </Link>
        </div>
        <input type="checkbox" className="toggler" id="toggler" />
        <label htmlFor="toggler" className="toggler">
          <span className="material-symbols-outlined">menu</span>{" "}
        </label>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="link-text nav-link-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bollywood" className="link-text nav-link-text">
                Bollywood
              </Link>
            </li>
            <li>
              <Link to="/technology" className="link-text nav-link-text">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/hollywood" className="link-text nav-link-text">
                Hollywood
              </Link>
            </li>
            <li>
              <Link to="/fitness" className="link-text nav-link-text">
                Fitness
              </Link>
            </li>
            <li>
              <Link to="/food" className="link-text nav-link-text">
                Food
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link-text nav-link-text">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/signin/admin" className="link-text nav-link-text">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/logout" className="link-text nav-link-text">
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
