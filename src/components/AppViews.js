import React, {useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';

const AppViews = props => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <React.Fragment>
            <Route 
            path="/login"
            render={props => {
                return <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} {...props} />
            }}
            />
        </React.Fragment>
    )
}

export default AppViews