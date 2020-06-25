import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const ClientDetails = props => {

    const clientId = props.clientId

    const [client, setClient] = useState({})

    async function fetchClient() {
        await ApiManager.getOne("clients", clientId)
            .then(res => setClient(res))
    };

    const handleDelete = () => {
        ApiManager.delete("clients", clientId)
        .then(()=> props.history.push('/clients'))
    }

    useEffect(() => {
        fetchClient()
    }, [])

    return (
        <>
        <div>
            <button
            onClick={() => props.history.push(`/client/edit/${client.id}`)}>Edit</button>
        </div>
            <div>{client.first_name} {client.last_name}</div>
            <div>{client.phone}</div>
            <div>{client.email}</div>
            <div>{client.address}</div>
            <div>{client.city}, {client.state} {client.zip_code}</div>
            <button
            id="client-details delete-button"
            onClick={handleDelete}
            >Delete</button>
        </>
    )
};

export default ClientDetails