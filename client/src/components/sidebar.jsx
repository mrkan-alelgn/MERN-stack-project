import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import en from "./images/en.png";
import es from "./images/es.png";
import de from "./images/de.png";
import it from "./images/it.png";
import cr from "./images/cr.png";
import gr from "./images/gr.png";
class Sidebar extends Component {
  render() {
    return (
      <div className="col-m-4 bg-light rounded-lg m-3" id="sticky-sidebar-left">
        <div id="sticky-sidebar-left-inner">
          <div class="btn btn-block btn-white disabled btn-outline-dark border-0">
            TOP LEAGUES
          </div>
          <ul className="list-group ">
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={en}></img>England - Premier league
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={es}></img>Spain - la liga
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={de}></img>Germany - Bundesliga
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={it}></img>Italy - Serie A
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={es}></img>Spain - Segunda Division
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={en}></img>England - FA-Cup
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={de}></img>Germany - DFB-pokal
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={de}></img>Germany - 2 Bundesliga
            </li>
            <li className="list-group-item py- 1 px-0">
              <img class="leagues" src={it}></img>Italy - Italy Cup
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={cr}></img>Croatia - 1 NHL
            </li>
            <li className="list-group-item py-1 px-0">
              <img class="leagues" src={gr}></img>Greece - Superleague
            </li>
          </ul>
        </div>
        <div id="filterByTime">
          <a href="#" id="filterLink">
            Filter by Time
          </a>
        </div>
        <ul className="list-group">
          <li className="list-group-item py-1">FOOTBALL</li>
          <li className="list-group-item py-1">ESPORTS FOOTBALL</li>
          <li className="list-group-item py-1">BASKETBALL</li>
          <li className="list-group-item py-1">ESPORTS BASKETBALL</li>
          <li className="list-group-item py-1">TENNIS</li>
          <li className="list-group-item py-1">VOLLEYBALL</li>
          <li className="list-group-item py-1">ESPORTS VOLLEYBALL</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
