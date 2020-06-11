import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";




import Customers from "./components/customers/customers";
import Navbar from "./components/navbar.component";
import Header from "./components/header.component";
import HomeContent from "./components/homeContent.component";
import DepositContent from "./components/depositContent.component";
import SportContent from "./components/sportContent.component";
import PromotionContent from "./components/promotionContent.component";
import CheckTicketContent from "./components/checkTicketContent.component";
import RuleContent from "./components/ruleContent.component";



function App() {
  return (
    <Fragment>
      <body class="bg-dark">
        <Router>
          <Header />
          <Navbar />
          <div class="container-fill mt-2">
            <div class="row">
              <div class="col bg-white mx-2">
                <Customers />
                <Customers />
                <Customers />
              </div>
              <div class="col-6  bg-white mx-2">
                <Route path="/homeContent" component={HomeContent} />
                <Route path="/depositContent" component={DepositContent} />
                <Route path="/ruleContent" component={RuleContent} />
                <Route path="/sportContent" component={SportContent} />
                <Route path="/promotionContent" component={PromotionContent} />
                <Route path="/checkTicketContent" component={CheckTicketContent} />
              </div>
              <div class="col bg-white mx-2">
                3 of 3
    </div>
            </div>
          </div>


        </Router>
      </body>
    </Fragment>
  );
}

export default App;
