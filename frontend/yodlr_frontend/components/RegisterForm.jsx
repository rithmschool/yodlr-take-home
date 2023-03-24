import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { API_URL } from "../../constants";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleFirstNameChange = evt => {
    setFirstName(evt.target.value);
  };

  const handleLastNameChange = evt => {
    setLastName(evt.target.value);
  };

  const handleStateChange = evt => {
    setState(evt.target.value);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const userPayload ={ 
        id : uuidv4(),
        "email" : email,
        "firstName" : firstName,
        "lastName" : lastName,
        "state" : state
     };
     
     try {
      const response = await axios.post(`${API_URL}/users`, userPayload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setEmail("")
    setFirstName("");
    setLastName("");
    setState("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col}>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Label htmlFor="firstName">First Name:</Form.Label>
        <Form.Control
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="lastName">Last Name:</Form.Label>
        <Form.Control
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
        />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="state"></Form.Label>
        <div onChange={handleStateChange}>
            <input type="radio" value={state} name="state" /> Active
            <input type="radio" value={state} name="state" /> Pending
        </div>
        <Button type="submit">Add User</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegisterForm;