/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css";
import "./Header.css";
import logo from "../assets/images/Serler-logo.png";
import icon_menu from "../assets/images/menu.png";

export default class Header extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  // Render Menu Dropdown
  renderDropDownMenu() {
    return (
      <ul id="menu-drop-down" className="dropdown-content">
        <li>
          <i className="material-icons">cloud_upload</i>
          <a href="/import">Upload Bitex</a>
        </li>
        <li>
          <i className="material-icons">power_settings_new</i>
          <a href="/">Sign out</a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "#E8EEFD", width: "100%", height: 80 }}>
        <div className="row">
          <div className="col s4">
            <a href="/home">
              <img
                src={logo}
                alt="Logo"
                style={{ height: 70, width: 70, marginTop: 5, float: "left" }}
              />
            </a>
          </div>
          <div className="col s4">
            <div
              style={{
                color: "#545351",
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: "60px"
              }}
            >
              {this.props.title}
            </div>
          </div>
          <div className="col s4">
            <a
              className="dropdown-trigger"
              href="#"
              data-target="menu-drop-down"
              style={{ float: "right" }}
            >
              <img
                src={icon_menu}
                alt="logout"
                style={{
                  color: "#545351",
                  height: 30,
                  width: 30,
                  marginTop: 15
                }}
              />
            </a>
          </div>
        </div>
        {this.renderDropDownMenu()}
      </div>
    );
  }
}
