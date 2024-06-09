import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-custom-clr3 ">
        <div className="container-fluid text-custom-clr1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand text-custom-clr1"
            style={{ fontWeight: "bold", fontSize: "1.4rem" }}
            to="/"
          >
            toRent
          </Link>

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex align-items-center">
              <NavLink className="nav-link" aria-current="page" to="/pg">
                PG
              </NavLink>
              <NavLink className="nav-link" aria-current="page" to="/flat">
                Flat
              </NavLink>
              <NavLink className="nav-link" aria-current="page" to="/villa">
                Villa
              </NavLink>
              <NavLink className="nav-link" aria-current="page" to="plot">
                Plot
              </NavLink>
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/commercial"
              >
                Commercial
              </NavLink>
            </div>
          </div>

          <button
            type="button"
            className="btn bg-custom-clr1"
            style={{ color: "white" }}
          >
            <NavLink className="test-custom-clr4" to="/login">
              Log in
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
