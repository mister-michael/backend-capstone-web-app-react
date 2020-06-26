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
            .then(() => props.history.push('/clients'))
    }

    useEffect(() => {
        fetchClient()
    }, [])

    return (
        <>
            <section className="page-container page-margins bubble">
                <div>
                    <div
                        className="create-button"
                        onClick={() => props.history.push(`/client/edit/${client.id}`)}>e</div>
                </div>
                <div className="bubble psd-heading">{client.first_name} {client.last_name}</div>
                <section className="photoshoot-details-div">

                    <div>{client.phone}</div>
                    <div>{client.email}</div>
                    <div>{client.address}</div>
                    <div>{client.city}, {client.state} {client.zip_code}</div>
                </section>
                <div
                    className="create-button"
                    id="client-details delete-button"
                    onClick={handleDelete}
                >x</div>
            </section>
        </>
    )
};

export default ClientDetails