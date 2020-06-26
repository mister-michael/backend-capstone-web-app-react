import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';

const ClientForm = props => {

    const [newClient, setNewClient] = useState({
        first_name: "", last_name: "", phone: "", email: "", address: "",
        city: "", state: "", zip_code: ""
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
                .then(() => props.history.push('/clients'))
        }
    }

    return (
        <>
            <section className="bubble page-margins page-container">

                <div className="bubble psd-heading">Add Client Form</div>

                <input
                    className="photoshoot-details-div"
                    id="first_name"
                    type="text"
                    placeholder="First Name"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="last_name"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="address"
                    type="text"
                    placeholder="Street Address"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="city"
                    type="text"
                    placeholder="City"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="state"
                    type="text"
                    placeholder="State"
                    onChange={handleFieldChange} />
                <input
                    className="photoshoot-details-div"
                    id="zip_code"
                    type="text"
                    placeholder="Zip Code"
                    onChange={handleFieldChange} />

                <div className="create-button"
                    onClick={handleSubmit}>+</div>
            </section>
        </>
    )
};

export default ClientForm