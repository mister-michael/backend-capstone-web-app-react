import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css'
import AuthMethods from '../auth/AuthMethods'

const Nav = props => {

    const {logout, isAuthenticated} = AuthMethods()

    const handleLogout = () => {
        logout();
        // props.history.push({pathname: "/login"})
    }

    if (isAuthenticated()){
    return (
        <div className="nav-container">
            <Link className="nav-link" to="/">PS</Link>
            <Link className="nav-link" to="/equipment">EQ</Link>
            <Link className="nav-link" to="/clients">CL</Link>
            <Link className="nav-link" to="/staff">ST</Link>
            <Link
                className="nav-link"
                to="/login"
                onClick={handleLogout}>XX</Link>
        </div>
    )} else {
        return null
    }
};

export default withRouter(Nav)