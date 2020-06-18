import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';

const AppViews = props => {

    return (
        <React.Fragment>
            <Route 
            path="/login"
            render={props => {
                return <Login {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default AppViews