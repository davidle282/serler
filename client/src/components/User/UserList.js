import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.reverse().map(user => {
      return (
        <div key={user._id}>
          <div>
            <span>{user.userFirstName}</span>
            <p>{user.userLastName}</p>
            <p>{user.userEmail}}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        User List
        {this.renderUsers()}
      </div>
    );
  }
}

// function mapStateToProps(surveys) {
//   return { surveys };
// }

const mapStateToProps = state => {
  return {
    users: Object.values(state.users)
  };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
