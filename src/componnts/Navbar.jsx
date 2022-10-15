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
              <Link to="/" className="link-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bollywood" className="link-text">
                Bollywood
              </Link>
            </li>
            <li>
              <Link to="/technology" className="link-text">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/hollywood" className="link-text">
                Hollywood
              </Link>
            </li>
            <li>
              <Link to="/fitness" className="link-text">
                Fitness
              </Link>
            </li>
            <li>
              <Link to="/food" className="link-text">
                Food
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
