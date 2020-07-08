import React, { useState } from 'react';
import AuthMethods from './AuthMethods';
import "./Auth.css"

const Register = props => {
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: "", city: "", phone: "" });
    const { register } = AuthMethods();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleRegister = e => {
        e.preventDefault();

        const newUser = {
            "first_name": credentials.firstName,
            "last_name": credentials.lastName,
            "email": credentials.email,
            "username": credentials.username,
            "password": credentials.password,
            "city": credentials.city,
            "phone": credentials.phone
        };

        register(newUser)
            .then(() => {
                props.history.push("/photoshoots")
            });
    };

    return (
        <div className="login-container">

            <div className="login-div">
                <div className="fields">
                    <input
                        className="register-input"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="email"
                        type="text"
                        placeholder="Email"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="phone"
                        type="text"
                        placeholder="Phone (ex. 555-555-5555)"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="city"
                        type="text"
                        placeholder="City of Residence"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={handleFieldChange}
                    />
                    <input
                        className="register-input"
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleFieldChange}
                    />
                    <button
                        className="signin-button"
                        id="register-button"
                        type="submit"
                        onClick={handleRegister}
                    >Register</button>

                    <div
                    className="register-link"
                    onClick={()=> props.history.push("/login")}>already have an account?</div>
                </div>
            </div>
        </div>
    )
}

export default Register