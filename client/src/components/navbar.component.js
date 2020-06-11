import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar nav-pills navbar-expand-lg bg-white   ">
                <div class="collapse navbar-collapse  justify-content-center text-dark " id="navbarNav">
                    <ul class="navbar-nav ">
                        <li className="navbar-item">
                            <Link to="/homeContent" className="nav-link px-3 ">HOME</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/sportContent" className="nav-link px-3">SPORT</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/promotionContent" className="nav-link px-3">PROMOTION</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/depositContent" className="nav-link px-3">DEPOSIT</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/checkTicketContent" className="nav-link px-3">CHECK TICKET</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/ruleContent" className="nav-link mx-3">RULE</Link>
                        </li>



                    </ul>
                </div>
            </nav>

        );
    }
}