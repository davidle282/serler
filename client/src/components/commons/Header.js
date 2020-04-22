import React, { Component } from "react";
import M from "materialize-css";
import "./Header.css";
import logo from "../assets/images/Serler-logo.png";
import icon_menu from "../assets/images/menu.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  // renderDropDownMenu() {
  //   return (
  //     <ul id="menu-drop-down" className="dropdown-content">
  //       <li>
  //         <i className="material-icons">cloud_upload</i>
  //         <a href="/import">Add Article</a>
  //       </li>
  //       <li>
  //         <i className="material-icons">power_settings_new</i>
  //         <a href="/">Sign out</a>
  //       </li>
  //     </ul>
  //   );
  // }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <a href="/myarticles">My Articles</a>{" "}
          </li>,
          <li key="2">Hi, {this.props.auth.userFirstName} </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <div className="container">
        <nav style={{ width: "100%", height: 80 }}>
          <div className="">
            <div className="col s4">
              <a href="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: 70,
                    width: 70,
                    marginTop: 5,
                    float: "left",
                  }}
                />
              </a>
            </div>
            <div className="col s4">
              <div
                style={{
                  color: "#545351",
                  fontWeight: "bold",
                  fontSize: 20,
                  lineHeight: "60px",
                }}
              >
                {this.props.title}
              </div>
            </div>
            {/* <div className="col s4">
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
                    marginTop: 15,
                  }}
                />
              </a>
            </div> */}
            {/* <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              Emaily
            </Link> */}
            <ul className="right">{this.renderContent()}</ul>
          </div>
          {/* {this.renderDropDownMenu()} */}
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth.user };
};
export default connect(mapStateToProps)(Header);
