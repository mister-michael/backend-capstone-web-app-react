import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import ClientListItem from './ClientListItem';

const Clients = props => {

    const [clients, setClients] = useState([])

    async function fetchClients () {
        await ApiManager.getAll("clients")
        .then(res => {
            console.log(res, "response once")
            setClients(res)});
    };

    useEffect(()=> {
        fetchClients()
    },[])

    return (
        <>
        <section className="page-container page-margins bubble">
        <div
        className="create-button"
        id="add-client-button"
        onClick={() => props.history.push('client/form')}
        >+</div>
            {clients.map(res => <ClientListItem client={res} {...props} key={res.id}/>)}
            </section>
        </>
    )
};

export default Clients