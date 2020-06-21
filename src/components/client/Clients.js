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
            {clients.map(res => <ClientListItem client={res} {...props} key={res.id}/>)}
        </>
    )
};

export default Clients