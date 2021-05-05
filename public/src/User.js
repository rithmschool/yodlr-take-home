import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import YodlrApi from './api.js';

function User () {
const history = useHistory();
const id = useParams();
const [user, setUser] = useState(null);

useEffect(() => {
    async function onLoad() {
        // find correct user
        const newUser = await YodlrApi.getUser(id.id);
        setUser(newUser);
    }
    onLoad()
  }, [])


// delete user upon click
async function handleClick (evt) {
    evt.preventDefault();
    await YodlrApi.deleteUser(id.id);
    history.push('/admin');
  }

  if (!user) {return <p>Not a valid user.</p>}

  return (
    <div>
        <h3>{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
        <Button color="danger" onClick={handleClick} size="sm">Delete User</Button>
    </div>
  )
}

export default User;