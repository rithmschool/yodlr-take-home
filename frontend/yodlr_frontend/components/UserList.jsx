import React, { useState } from "react";
import User from "./User";

function UserList() {
    const [users, setUsers] = useState([]);
    const userComponents = users.map(user => (
    <User
      id={user.id}
      email={user.email}
      firstName={user.firstName}
      lastName={user.lastName}
      state={user.state}
    />
  ));

  return (
    <div>
      <ul>{userComponents}</ul>
    </div>
  );
}

export default UserList;