import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css'
import AuthMethods from '../auth/AuthMethods';
import NavIcons from './NavIcons'

const Nav = props => {

    const { logout, isAuthenticated } = AuthMethods()

    const handleLogout = () => {
        logout();
        // props.history.push({pathname: "/login"})
    }

    if (isAuthenticated()) {
        return (
            <div className="nav-container">

                <div className="link-container">
                    <Link id="nav-ps" className="nav-link" to="/">{NavIcons.photoshootIcon()}</Link>
                </div>

                <div className="link-container">
        <Link id="nav-eq" className="nav-link" to="/equipment">{NavIcons.equipmentIcon()}</Link>
                </div>

                <div className="link-container">
        <Link id="nav-cl" className="nav-link" to="/clients">{NavIcons.clientIcon()}</Link>
                </div>

                <div className="link-container">
        <Link id="nav-st" className="nav-link" to="/staff">{NavIcons.staffIcon()}</Link>
                </div>

                <div className="link-container">
                    <Link
                        id="nav-xx"
                        className="nav-link"
                        to="/login"
                        onClick={handleLogout}>{NavIcons.logoutIcon()}</Link>
                </div>
            </div>
        )
    } else {
        return null
    }
};

export default withRouter(Nav)