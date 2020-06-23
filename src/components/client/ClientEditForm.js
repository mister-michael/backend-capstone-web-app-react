import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';

const ClientEditForm = props => {

    const clientId = props.clientId

    const [client, setClient] = useState(null);

    const handleFieldChange = (evt) => {
        const stateToChange = { ...client };
        stateToChange[evt.target.id] = evt.target.value;
        setClient(stateToChange);
    };

    async function fetchClient () {
        await ApiManager.getOne("clients", clientId)
        .then(res => setClient(res));
    }

    const handleSubmit = () => {
        ApiManager.update("clients", clientId, client)
        .then(() => props.history.push("/clients"))
    }

    useEffect(()=>{
        fetchClient();
    },[])

    if (client) {
    return (
        <>
        <div>Add Client Form</div>

        <input
        id="first_name"
        type="text"
        placeholder="First Name"
        value={client.first_name}
        onChange={handleFieldChange} />
        <input
        id="last_name"
        type="text"
        placeholder="Last Name"
        value={client.last_name}
        onChange={handleFieldChange} />
        <input
        id="phone"
        type="text"
        placeholder="Phone Number"
        value={client.phone}
        onChange={handleFieldChange} />
        <input
        id="email"
        type="text"
        placeholder="Email"
        value={client.email}
        onChange={handleFieldChange} />
        <input
        id="address"
        type="text"
        placeholder="Street Address"
        value={client.address}
        onChange={handleFieldChange} />
        <input
        id="city"
        type="text"
        placeholder="City"
        value={client.city}
        onChange={handleFieldChange} />
        <input
        id="state"
        type="text"
        placeholder="State"
        value={client.state}
        onChange={handleFieldChange} />
        <input
        id="zip_code"
        type="text"
        placeholder="Zip Code"
        value={client.zip_code}
        onChange={handleFieldChange} />

        <button
        onClick={handleSubmit}
        >Update Client</button>
        </>
    )} else {return (<div></div>)}
};

export default ClientEditForm