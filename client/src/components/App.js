import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import Home from "./screens/Home";
import ArticleDetails from "./screens/ArticleDetails";
import MyArticles from "./screens/MyArticles";

import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Landing from "./Landing";
import ImportBibtex from "./screens/ImportBibtex";
import EditArticle from "./screens/EditArticle";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route path="/detail/:id" exact component={ArticleDetails} />
            <Route path="/edit/:id" exact component={EditArticle} />
            <Route path="/myarticles" exact component={MyArticles} />
            <Route path="/import" exact component={ImportBibtex} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
