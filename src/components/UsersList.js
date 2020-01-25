import React from "react";
import { PropTypes } from "prop-types";


export default function UsersList({users}) {
   return (
    <div>
       {users.name}
    </div>
   )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}
