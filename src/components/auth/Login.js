import React, { useState } from 'react';
import AuthMethods from './AuthMethods';
import './Auth.css';

const Login = props => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { login } = AuthMethods();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange)
    };

    const handleLogin = (evt) => {
        evt.preventDefault();

        const credentialObject = {
            "username": credentials.username,
            "password": credentials.password
        };

        login(credentialObject).then(() => {
            props.history.push("/photoshoots")
        })
    };

    return (
        <div className="login-container">
            <div
                className="login-div"
                onKeyUp={evt => evt.key === "Enter" ? handleLogin(evt) : null}>

                <div className="fields">

                    <div className="username">
                        <input
                            className="user-input"
                            onChange={handleFieldChange}
                            type="text"
                            id="username"
                            placeholder="username"
                        />
                    </div>

                    <div className="password">

                        <input
                            className="pass-input"
                            onChange={handleFieldChange}
                            type="password"
                            id="password"
                            placeholder="password"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        id="login-button"
                        className="signin-button"
                        onClick={handleLogin}>O</button>
                </div>
            </div>
        </div>
    )
};

export default Login