import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";
import { API_URL } from "../../constants";

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      let result = [];
      const getUsers = async () => {
        const result = await axios.get(`${API_URL}/users`);
        return result.data;
      }
      getUsers().then((res) => setUsers(res))
    },[]);
    console.log(users)
    const userComponents = users.map(user => (
    <User user={user}/>
  ));

  return (
    <div>
      <ul>{userComponents}</ul>
    </div>
  );
}

export default UserList;