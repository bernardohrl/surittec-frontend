import React from "react";
import { PropTypes } from "prop-types";


export default function UsersList({users}) {
   console.log(users);
   
   return (
    <div>
      {users.length === 0 ? 'null' : users[0].name}
    </div>
   )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}
