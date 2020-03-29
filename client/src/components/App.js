import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import Home from "./screens/Home";
import ArticleDetails from "./screens/ArticleDetails";
import ArticleCreate from "./screens/ArticleCreate";
import ArticleShow from "./screens/ArticleShow";
import Dashboard from "./Dashboard";

import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Landing from "./Landing";
import ImportBibtex from "./screens/ImportBibtex";
import UserList from "./User/UserList";
import history from "../history";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/home" component={Home} /> */}
            {/* <Route path="/detail/:id" exact component={ArticleDetails} /> */}
            <Route path="/import" exact component={ImportBibtex} />
            <Route path="/article/add" exact component={ArticleCreate} />
            <Route path="/myarticles" exact component={Dashboard} />
            <Route path="/detail/:id" exact component={ArticleShow} />
            <Route path="/users" exact component={UserList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
