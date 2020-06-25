import React, {useState} from 'react';
import AuthMethods from './AuthMethods';

const Register = props => {
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: "", city:"", phone:""  });
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
            props.history.push("/")});
    };

    return (
        <div>
            <input
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleFieldChange}
            />
            <input
            id="lastName"
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

export default Register