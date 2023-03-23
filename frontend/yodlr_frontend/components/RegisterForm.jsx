import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';

function RegisterForm({ createUser }) {
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

  const gatherInput = evt => {
    evt.preventDefault();
    createUser({ 
        id : uuidv4(),
        "email" : email,
        "firstName" : firstName,
        "lastName" : lastName,
        "state" : state
     });
    setEmail("")
    setFirstName("");
    setLastName("");
    setState("");
  };

  return (
    <div>
      <Form.Group className="mb-3" onSubmit={gatherInput}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <label htmlFor="state"></label>
        <div onChange={handleStateChange}>
            <input type="radio" value={state} name="state" /> Active
            <input type="radio" value={state} name="state" /> Pending
        </div>
        <button>Add User</button>
      </Form.Group>
    </div>
  );
}

export default RegisterForm;