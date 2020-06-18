import React from 'react';

const Login = props => {

    return (
        <div>
            <input 
            onChange={handleFieldChange} 
            type="text" 
            id="username" 
            placeholder="username"
            />
        </div>
    )
}

export default Login