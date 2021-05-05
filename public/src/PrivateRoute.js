import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CurrentUserContext } from './YodlrContext';

function PrivateRoute ({ component: Component, ...rest }) {
    const currentUser = useContext(CurrentUserContext);

    return(
    <Route 
    {...rest}
    render={props =>
    (currentUser) ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }}
        />
    )
    }
    />
    )
}

export default PrivateRoute;