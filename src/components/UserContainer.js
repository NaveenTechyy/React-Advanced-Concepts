import * as React from "react";
import { connect } from "react-redux";
import { GET_USERS } from "./actions/index";

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="container">
        {this.props.users ? (
          (this.props.users || []).map((user, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-6">{user.name}</div>
                <div className="col-6">
                  <a href={user.email}> {user.email}</a>
                </div>
              </div>
            );
          })
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch({ type: GET_USERS });
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(UserContainer);
