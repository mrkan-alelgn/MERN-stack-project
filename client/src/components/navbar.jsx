import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import logo from "./images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark " id="navbar">
          <a href="#">
            <img src={logo} className="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <form className="form-inline m-2 mr-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                  ></input>
                </form>
              </li>
              <li className="nav-item">
                <button className="btn btn-info m-2" id="login">
                  {" "}
                  LOGIN
                </button>
              </li>
              <li className="nav-item ">
                <button className="btn m-2 btn-primary" id="register">
                  {" "}
                  REGISTER
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          className="navbar navbar-expand-lg navbar-light border-bottom"
          id="navbar2"
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-sm-auto mt-2 mt-lg-0">
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li
                className="nav-item dropdown active"
                className="secondNavElement"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SPORT
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    UPCOMING EVENTS
                  </a>
                  <a className="dropdown-item" href="#">
                    TOP SPORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    SPORT
                  </a>
                  <a className="dropdown-item" href="#">
                    RESULTS
                  </a>
                </div>
              </li>
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  MIX MATCH <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  PROMOTIONS <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  DEPOSIT <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  CHECK TICKET <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active" className="secondNavElement">
                <a className="nav-link" href="#">
                  RULES <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
