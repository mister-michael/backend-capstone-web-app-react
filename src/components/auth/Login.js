import React, {useState} from 'react';
import AuthManager from '../../modules/AuthManager';
import AuthMethods from './AuthMethods'

const Login = props => {
    const [credentials, setCredentials] = useState({username:"", password:""});
    const {login} = AuthMethods();

    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials};
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
            props.history.push("/")})
    };

    return (
        <div>
            <input 
            onChange={handleFieldChange} 
            type="text" 
            id="username" 
            placeholder="username"
            />
            <input 
            onChange={handleFieldChange} 
            type="password" 
            id="password" 
            placeholder="password"
            />
            <button 
            type="submit"
            id="login-button"
            onClick={handleLogin}
            >Log In</button>
        </div>
    )
};

export default Login