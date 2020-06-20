import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const ClientDetails = props => {

    const [client, setClient] = useState({})

    async function fetchClient() {
        await ApiManager.getOne("clients", props.clientId)
            .then(res => setClient(res))
    };

    useEffect(() => {
        fetchClient()
    }, [client])

    return (
        <>
            <div>{client.first_name} {client.last_name}</div>
            <div>{client.phone}</div>
            <div>{client.email}</div>
            <div>{client.address}</div>
            <div>{client.city}, {client.state} {client.zip_code}</div>
            <div></div>
        </>
    )
};

export default ClientDetails