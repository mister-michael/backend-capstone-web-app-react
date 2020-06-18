import React, {useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import AuthMethods from './auth/AuthMethods'

const AppViews = props => {

    // const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {isAuthenticated} = AuthMethods()

    return (
        <React.Fragment>
            <Route 
            path="/login"
            render={props => {
                return <Login {...props} />
            }}
            />
            <Route 
            path="/register"
            render={props => {
                return <Register {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default AppViews