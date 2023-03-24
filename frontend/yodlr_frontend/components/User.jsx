import React, { useState } from "react";
import { Card } from "react-bootstrap";


function User( {user} ) {
    return(
        <Card className="h-100">
            <Card.Body>
                <h3>
                {user.firstName} {user.lastName} 
                </h3>
                <p>{user.email}</p>
                <h6>{user.state}</h6>
            </Card.Body>
        </Card>
    )
};

export default User;