import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import "./components/style.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="main"></div>
    </Fragment>
  );
}

export default App;
