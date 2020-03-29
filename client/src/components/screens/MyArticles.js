import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyArticles } from "../../actions";
import { Link } from "react-router-dom";
import TableRow from "../commons/TableRow";

class MyArticles extends Component {
  componentDidMount() {
    this.props.fetchMyArticles();
  }

  renderRow() {
    return this.props.articles.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  // renderCreate() {
  //   if (this.props.isSignedIn) {
  //     return (
  //       <div style={{ textAlign: "right" }}>
  //         <Link to="/article/add" className="ui button primary">
  //           Create Stream
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

  renderArticles() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div>
        My Articles
        {this.renderArticles()}
        <Link
          style={{ position: "absolute" }}
          to="/article/add"
          className="btn-floating btn-large red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: Object.values(state.articles)
  };
};

export default connect(mapStateToProps, { fetchMyArticles })(MyArticles);
