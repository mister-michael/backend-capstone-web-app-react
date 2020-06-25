import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import ClientListOption from '../client/ClientListOption';

const PhotoshootForm = props => {

    const [newPhotoshoot, setNewPhotoshoot] = useState({ name: "", location: "", date_scheduled: "", charge: "", client_id: null, indoor: null, paid: 1 })
    const [clients, setClients] = useState(null)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newPhotoshoot };
        stateToChange[evt.target.id] = evt.target.value;
        setNewPhotoshoot(stateToChange);
    };

    const handleClientSelect = (evt) => {
        const stateToChange = {...newPhotoshoot}
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setNewPhotoshoot(stateToChange)
    }

    async function fetchClients() {
        await ApiManager.getAll("clients")
            .then(res => setClients(res))
    };

    const createClientOptionList = () => {
        if (clients !== null) {
            return clients.map(res => <ClientListOption
                client={res}
                value={res.id}
                key={res.id} />
            )
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            newPhotoshoot.name === "" ||
            newPhotoshoot.location === "" ||
            newPhotoshoot.date_scheduled === "" ||
            // newPhotoshoot.client_id === 0 ||
            // newPhotoshoot.indoor === null ||
            newPhotoshoot.charge === "" 
        ) {
            window.alert("please fill out all fields")
        } else {
            newPhotoshoot.client_id = parseInt(newPhotoshoot.client_id)
            newPhotoshoot.indoor = parseInt(newPhotoshoot.indoor)
            ApiManager.create("photoshoots", newPhotoshoot)
            .then(() => props.history.push('/photoshoots'))
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
                    <option className="form-control">Select Client</option>
                    {createClientOptionList()}
                    {/* {clients ? clients.map(res =>
                        <ClientListOption
                            client={res}
                            value={res.id}
                            key={res.id} />) : null} */}
                </select>
            </fieldset>

            <select id="indoor" onChange={handleFieldChange}>
                <option >select</option>
                <option value="1">Indoor</option>
                <option value="0">Outdoor</option>
            </select>

            <button type="submit" onClick={handleSubmit}>submit</button>
        </>
    )
};

export default PhotoshootForm