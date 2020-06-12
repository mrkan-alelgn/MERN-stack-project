import React, { Fragment } from "react";
import Customers from "./components/customers/customers";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="main"></div>
    </Fragment>
  );
}

export default App;
