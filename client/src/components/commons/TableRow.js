import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <Link to={`/detail/${this.props.obj._id}`}>
            {this.props.obj.article_title}
          </Link>
        </td>
        <td>{this.props.obj.article_authors}</td>
        <td>
          <button className="btn btn-primary">Edit</button>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
