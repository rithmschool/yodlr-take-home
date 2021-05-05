import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import YodlrApi from './api.js';

function UserCard ({ user }) {
  const history = useHistory();

  // activate user
  async function handleClick (evt) {
    evt.preventDefault();
    user.state = "active";
    await YodlrApi.updateUser(user.id, {state: "active"});
    history.push('/admin')
  }

  // display user detail card
  return (
    <div>
      <Card >
        <CardBody >
        <Link to={`/users/${user.id}`} >
          <CardTitle tag="h5" href={`users/${user.id}`}>{user.firstName} {user.lastName}</CardTitle>
          <CardText>
              <p>Email: {user.email}</p>
          </CardText>
          </Link>
          {(user.state === "pending") ? <ButtonToggle color="primary" onClick={handleClick}>Activate</ButtonToggle> : <p></p>}
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;