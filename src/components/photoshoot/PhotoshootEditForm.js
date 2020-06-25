import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import ClientListOption from '../client/ClientListOption';
import Photoshoot from './Photoshoot';

const PhotoshootEditForm = props => {

    const photoshootId = props.photoshootId
    console.log(photoshootId)

    const [fetchedPhotoshoot, setFetchedPhotoshoot] = useState(null)
    const [clients, setClients] = useState(null)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...fetchedPhotoshoot };
        stateToChange[evt.target.id] = evt.target.value;
        setFetchedPhotoshoot(stateToChange);
    };

    const handleClientSelect = (evt) => {
        const stateToChange = {...fetchedPhotoshoot}
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setFetchedPhotoshoot(stateToChange)
    }

    async function fetchClients() {
        await ApiManager.getAll("clients")
            .then(res => setClients(res))
    };

    async function fetchPhotoshoot () {
        await ApiManager.getOne("photoshoots", photoshootId)
        .then(res => setFetchedPhotoshoot(res))
    }

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
            fetchedPhotoshoot.name === "" ||
            fetchedPhotoshoot.location === "" ||
            fetchedPhotoshoot.date_scheduled === "" ||
            // newPhotoshoot.client_id === 0 ||
            // newPhotoshoot.indoor === null ||
            fetchedPhotoshoot.charge === "" 
        ) {
            window.alert("please fill out all fields")
        } else {
            fetchedPhotoshoot.client_id = parseInt(fetchedPhotoshoot.client_id)
            fetchedPhotoshoot.indoor = parseInt(fetchedPhotoshoot.indoor)
            ApiManager.update("photoshoots", photoshootId, fetchedPhotoshoot)
            .then(() => props.history.push('/photoshoots'))
        }
    }

    useEffect(() => {
        fetchClients();
        fetchPhotoshoot();
    }, [])

    useEffect(() => {
        createClientOptionList();
    }, [clients])

    if (fetchedPhotoshoot) {
    return (
        
        <>
            <input
                type="text"
                id="name"
                placeholder="Shoot Name"
                onChange={handleFieldChange}
                value={fetchedPhotoshoot.name}
            />
            <input
                type="text"
                id="location"
                placeholder="Shoot Location"
                onChange={handleFieldChange}
                value={fetchedPhotoshoot.location}
            />
            <input
                type="date"
                id="date_scheduled"
                placeholder="Scheduled Shoot Date"
                onChange={handleFieldChange}
                value={fetchedPhotoshoot.date_scheduled}
            />
            <input
                type="text"
                id="charge"
                placeholder="Charge"
                onChange={handleFieldChange}
                value={fetchedPhotoshoot.charge}
            />
            <fieldset>
                <select
                    id="client_id"
                    onChange={handleClientSelect}
                    defaultValue={fetchedPhotoshoot.client_id}
                >
                    <option 
                    className="form-control">Select Client</option>
                    {createClientOptionList()}
                    {/* {clients ? clients.map(res =>
                        <ClientListOption
                            client={res}
                            value={res.id}
                            key={res.id} />) : null} */}
                </select>
            </fieldset>

            <select 
            id="indoor" 
            onChange={handleFieldChange}
            value={fetchedPhotoshoot.indoor}>
                <option >select</option>
                <option value="1">Indoor</option>
                <option value="0">Outdoor</option>
            </select>

            <button type="submit" onClick={handleSubmit}>submit</button>
        </>
    )} else {
        return (
            <div>xxx</div>
        )
    }
};

export default PhotoshootEditForm