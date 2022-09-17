import React, { Component } from "react";
import logoo from "../../assets/logoo.jpg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar " id="nav_back">
        <a href="#" className="logo ">
          <img
            src={logoo}
            className=" edit_logo"
            style={{ borderRadius: "50px" }}
          />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} />
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#home" className="link" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="link" style={{ color: "white" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="link" style={{ color: "white" }}>
                About
              </a>
            </li>
            <li>
              <a href="#classes" className="link" style={{ color: "white" }}>
                Classes
              </a>
            </li>

            <li>
              <a href="#contact" className="link" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
