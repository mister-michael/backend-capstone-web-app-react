import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import ClientListOption from '../client/ClientListItem';

const PhotoshootForm = props => {

    const [newPhotoshoot, setNewPhotoshoot] = useState({})
    const [clients, setClients] = useState([])

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newPhotoshoot };
        stateToChange[evt.target.id] = evt.target.value;
        setNewPhotoshoot(stateToChange);
    };

    const handleClientSelect = (evt) => {
        const stateToChange = { ...newPhotoshoot }
        stateToChange.client_id = parseInt(evt.target.value);
        setNewPhotoshoot(stateToChange)
    }

    async function fetchClients () {
        await ApiManager.getAll("clients")
        .then(res => setClients(res))
    }

    useEffect(()=>{
        fetchClients();
    },[clients])

    return (
        <section>
            <input
                type="text"
                id="name"
                placeholder="Shoot Name"
                onChange={handleFieldChange}
            />
            <input
                type="text"
                id="location"
                placeholder="Shoot Location"
                onChange={handleFieldChange}
            />
            <input
                type="date"
                id="date_scheduled"
                placeholder="Shoot Location"
                onChange={handleFieldChange}
            />
            <input
                type="text"
                id="charge"
                placeholder="Charge"
                onChange={handleFieldChange}
            />
            <div>
                <select
                    id=""
                    onChange={handleClientSelect}
                >
                <option value="0">Select Client</option>
                {clients.map(res => 
                <ClientListOption 
                client={res} 
                value={res.id} 
                key={res.id}/>)}
                </select>
            </div>
        </section>
    )
};

export default PhotoshootForm