import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import ClientListOption from '../client/ClientListOption';

const PhotoshootForm = props => {

    const [newPhotoshoot, setNewPhotoshoot] = useState({})
    const [clients, setClients] = useState(null)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newPhotoshoot };
        stateToChange[evt.target.id] = evt.target.value;
        setNewPhotoshoot(stateToChange);
    };

    const handleClientSelect = (evt) => {
        const stateToChange = { ...newPhotoshoot }
        stateToChange.client_id = parseInt(evt.target.defaultValue);
        setNewPhotoshoot(stateToChange)
    }

    async function fetchClients() {
        await ApiManager.getAll("clients")
            .then(res => setClients(res))
    };

    const createClientOptionList = () => {
        if (clients) {
            console.log(clients)
            return clients.map(res => <ClientListOption
                client={res}
                value={res.id}
                key={res.id} />
            )
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPhotoshoot.name === "") {
            window.alert("photoshoot requires a name")
        }
    }

    useEffect(() => {
        fetchClients();
    }, [])

    useEffect(() => {
        createClientOptionList();
    }, [clients])

    return (
        <>
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
                placeholder="Scheduled Shoot Date"
                onChange={handleFieldChange}
            />
            <input
                type="text"
                id="charge"
                placeholder="Charge"
                onChange={handleFieldChange}
            />
            <fieldset>
                <select
                    id="client_id"
                    onChange={handleClientSelect}
                >
                    <option defaultValue="1" className="form-control">Select Client</option>
                    {createClientOptionList()}
                    {/* {clients ? clients.map(res =>
                        <ClientListOption
                            client={res}
                            value={res.id}
                            key={res.id} />) : null} */}
                </select>
            </fieldset>

            <select id="indoor">
                <option defaultValue="null">select</option>
                <option defaultValue="1">Indoor</option>
                <option defaultValue="0">Outdoor</option>
            </select>

            <button type="submit"  onClick={handleSubmit} />
        </>
    )
};

export default PhotoshootForm