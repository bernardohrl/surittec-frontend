import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import UsersList from "../components/UsersList"
import { fetchUsers } from "../actions/UsersActions"

class Users extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <UsersList users={this.props.users} />
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(Users);