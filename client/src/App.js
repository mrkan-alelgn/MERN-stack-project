import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import SidebarRight from "./components/sidebarRight.jsx";
import MainBody from "./components/mainBody.jsx";

function App() {
  return (
    <Fragment>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainBody />
          <SidebarRight />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
