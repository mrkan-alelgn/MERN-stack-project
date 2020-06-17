import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
class SidebarRight extends Component {
  render() {
    return (
      <div className="col-m-4 p-2 my-3" id="sticky-sidebar-right">
        <div id="sidebarRight">
          <div id="sidebarRight1">BETSLIP</div>
          <h5>Bet slip is empty </h5>
        </div>
      </div>
    );
  }
}

export default SidebarRight;
