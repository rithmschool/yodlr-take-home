import React, { useContext, useState } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { CurrentUserContext } from './YodlrContext';
import { Redirect } from 'react-router-dom';

function Login ({ login }) {
    const currentUser = useContext(CurrentUserContext);
    const initialState = {id: "", password: ""};
    const [formData, setFormData] = useState(initialState);
    

    // handle user form input before submit
    function handleChange (evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }
    
    // handle form submission
    async function handleSubmit (evt) {
        evt.preventDefault();
        try{
        await login(formData);
        setFormData(initialState);
        } catch (err) {
            return( <p>Bad login, please try again.</p>)
        };
    }


    // display login form
    return (
        <div>
            <h2>Admin Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="text" name="id" placeholder="ID" onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="password" placeholder="Password" onChange={handleChange} required/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Login;