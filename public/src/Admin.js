import React, { useContext } from 'react';
import UserCard from './UserCard';
import { UsersContext } from './YodlrContext';


function Admin() {
    const users = useContext(UsersContext);
    if (!users) {
        return (<p>There are no users signed up right now.</p>)
    }

    // display list of users
    return (
        <div>
            <h2>Current Users</h2>
            {users.map(user => (<UserCard user={user}/>))}
        </div>
    )
}

export default Admin;