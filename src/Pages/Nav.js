import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <>
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-child text-warning fa-2x"></i>
      </Link>
      <button
        type="button"
        className="navbar-toggler bg-light"
        data-toggle="collapse"
        data-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link text-light text-uppercase font-weight-bold px-3"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light text-uppercase font-weight-bold px-3"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light text-uppercase font-weight-bold px-3"
              to="/progress"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light text-uppercase font-weight-bold px-3"
              to="/team"
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-light text-uppercase font-weight-bold px-3"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <form action="" className="form-inline">
          <div className="input-group">
            <input type="text" placeholder="Search" className="form-control" />
            <div className="input-group-append">
              <button type="button" className="btn">
                <i className="fas fa-search text-muted"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </>
);

export default Nav;
