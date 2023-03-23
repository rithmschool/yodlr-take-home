import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Axios from "axios"


function User() {
    const [users, setUsers] = useState("")
    
    const getUsers = () => {
    Axios.get("http://localhost:3000/users").then(
        (response) => {
            setUsers(response.data)
        }
    )
};

    return(
        <Card className="h-100">
            <Button onClick={getUsers}>See Users</Button>
            <Card.Body>
                {users}
            </Card.Body>
        </Card>
    )
};

export default User;