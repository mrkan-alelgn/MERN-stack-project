import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav col-sm-4 bg-info m-2">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Sidebar;
