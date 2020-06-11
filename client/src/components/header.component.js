import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar nav-pills navbar-expand-lg   ">
                <a class="navbar-brand" href="#">VAMOS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse  justify-content-end " id="navbarNav">

                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav ml-5">

                        <li class="nav-item">
                            <a class="nav-link px-3 bg-info text-white" href="#">LOGIN </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3 bg-info text-white" href="#">REGISTER</a>
                        </li>

                    </ul>

                </div>
            </nav>

        );
    }
}