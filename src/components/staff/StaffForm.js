import React, { useState } from 'react';
import AuthMethods from '../auth/AuthMethods';

const StaffForm = props => {
    const [credentials, setCredentials] = useState({
        first_name: "", last_name: "", email: "", username: "", password: "", city: "", phone: ""
    });

    const { createEmployee } = AuthMethods();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleRegister = e => {
        e.preventDefault();

        createEmployee(credentials)
            .then(() => {
                props.history.push("/employees")
            });
    };

    return (
        <div>
            <input
                id="first_name"
                type="text"
                placeholder="First Name"
                onChange={handleFieldChange}
            />
            <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                onChange={handleFieldChange}
            />
            <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleFieldChange}
            />
            <input
                id="phone"
                type="text"
                placeholder="phone number (###-###-####)"
                onChange={handleFieldChange}
            />
            <input
                id="city"
                type="text"
                placeholder="City of Residence"
                onChange={handleFieldChange}
            />
            <input
                id="username"
                type="text"
                placeholder="username"
                onChange={handleFieldChange}
            />
            <input
                id="password"
                type="password"
                placeholder="password"
                onChange={handleFieldChange}
            />
            <button
                id="register-button"
                type="submit"
                onClick={handleRegister}
            >Register</button>
        </div>
    )
}

export default StaffForm