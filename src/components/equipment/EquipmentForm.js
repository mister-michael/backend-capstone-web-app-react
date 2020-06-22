import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentTypeListOptions from './EqupmentTypeListOptions';
import RentalHouseListOptions from '../rental/RentalHouseListOptions';

const EquipmentForm = props => {

    const [newEquipment, setNewEquipment] = useState({
        name: "", weight: "", battery_count: "", battery_type_id: "", wireless: "",
        equipment_type_id: "", return_date: null, rental_house_id: null
    });

    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [wirelessCheckbox, setWirelessCheckbox] = useState(false);
    const [rentalHouses, setRentalHouses] = useState(null);


    const toggleRentalForm = () => {
        const rentalForm = document.getElementById('rental-form')
        rentalForm.classList.toggle('hidden')
    }

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newEquipment };
        stateToChange[evt.target.id] = evt.target.value;
        setNewEquipment(stateToChange);
    };

    const handleOptionSelect = (evt) => {
        const stateToChange = { ...equipmentTypes }
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setNewEquipment(stateToChange)
    };

    const handleCheckBox = () => {
        setWirelessCheckbox(!wirelessCheckbox)
    };

    const createEquipmentTypeOptionsList = () => {
        if (equipmentTypes !== null) {
            return equipmentTypes.map(res =>
                <EquipmentTypeListOptions equipmentType={res} value={res.id} key={res.id} />)
        }
    };

    const createRentalHouseListOptionsList = () => {
        if (rentalHouses !== null) {
            return rentalHouses.map(res =>
                <RentalHouseListOptions rentalHouse={res} key={res.id} />)
        }
    };



    async function fetchEquipmentTypes() {
        await ApiManager.getAll("equipmenttypes")
            .then(res => setEquipmentTypes(res))
    };

    async function fetchRentalHouses() {
        await ApiManager.getAll("rentalhouses")
            .then(res => setRentalHouses(res));
    };

    useEffect(() => {
        fetchEquipmentTypes();
        fetchRentalHouses();
    }, []);
    
    useEffect(() => {
        createRentalHouseListOptionsList();
    }, [rentalHouses]);
    
    useEffect(() => {
        createEquipmentTypeOptionsList();
    }, [equipmentTypes]);

    return (
        <>
            <input
                type="text"
                id="name"
                placeholder="Equipment Name"
                onChange={handleFieldChange}
            />
            <input
                type="text"
                id="weight"
                placeholder="Weight in KG"
                onChange={handleFieldChange}
            />

            <select
                id="equipment_type_id"
                onChange={handleOptionSelect}>

                <option className="form-control">Equipment Type</option>
                {createEquipmentTypeOptionsList()}

            </select>

            <label>Wireless?</label>
            <input type="checkbox"
                onChange={handleCheckBox}
            />

            <div onClick={toggleRentalForm}>Rental?</div>

            <div className="hidden" id="rental-form">

                <input
                    type="date"
                    id="return_date"
                    placeholder="Return Date"
                    onChange={handleFieldChange}
                />

                <select
                    id="rental_house_id"
                    onChange={handleOptionSelect}>

                    <option className="form-control">Rental House</option>
                    {createRentalHouseListOptionsList()}

                </select>
            </div>

            <button id="submit-button" type="submit">submit</button>
        </>
    )
};

export default EquipmentForm