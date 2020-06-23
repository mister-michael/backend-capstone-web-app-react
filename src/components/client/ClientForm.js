import React, {useState} from 'react';
import ApiManager from '../../modules/ApiManager';

const ClientForm = props => {

    const [newClient, setNewClient] = useState({
        first_name: "", last_name:"", phone:"", email:"", address:"",
        city:"", state:"", zip_code:""
    });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newClient };
        stateToChange[evt.target.id] = evt.target.value;
        setNewClient(stateToChange);
    };

    const handleSubmit = () => {
        if (
            newClient.first_name === "" ||
            newClient.last_name === "" ||
            newClient.phone === "" ||
            newClient.email === "" ||
            newClient.address === "" ||
            newClient.city === "" ||
            newClient.state === "" ||
            newClient.zip_code === "" 
        ) {
            window.alert("please fill out all fields")
        } else {
        ApiManager.create("clients", newClient)
        .then(()=> props.history.push('/clients'))
        }
    }

    return (
        <>
        <div>Add Client Form</div>

        <input
        id="first_name"
        type="text"
        placeholder="First Name"
        onChange={handleFieldChange} />
        <input
        id="last_name"
        type="text"
        placeholder="Last Name"
        onChange={handleFieldChange} />
        <input
        id="phone"
        type="text"
        placeholder="Phone Number"
        onChange={handleFieldChange} />
        <input
        id="email"
        type="text"
        placeholder="Email"
        onChange={handleFieldChange} />
        <input
        id="address"
        type="text"
        placeholder="Street Address"
        onChange={handleFieldChange} />
        <input
        id="city"
        type="text"
        placeholder="City"
        onChange={handleFieldChange} />
        <input
        id="state"
        type="text"
        placeholder="State"
        onChange={handleFieldChange} />
        <input
        id="zip_code"
        type="text"
        placeholder="Zip Code"
        onChange={handleFieldChange} />

        <button
        onClick={handleSubmit}>Create Client</button>
        </>
    )
};

export default ClientForm