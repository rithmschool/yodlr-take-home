import React from 'react';
import { Button } from 'reactstrap';

// display home page
function Home () {
    return(
        <div>
            <h3>Welcome to the Yodlr Design Challenge!</h3>
            <p>Click 'Sign Up' to register.</p>
            <Button color="primary" href="/signup">Sign Up</Button>
        </div>
    )
}

export default Home;