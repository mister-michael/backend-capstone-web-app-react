import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentTypeListOptions from './EqupmentTypeListOptions';
import RentalHouseListOptions from '../rental/RentalHouseListOptions';

const EquipmentEditForm = props => {

    const equipmentId = props.equipmentId

    const [equipment, setEquipment] = useState(null);

    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [wirelessCheckbox, setWirelessCheckbox] = useState(false);
    const [rentalHouses, setRentalHouses] = useState(null);


    const toggleRentalForm = () => {
        const rentalForm = document.getElementById('rental-form')
        rentalForm.classList.toggle('hidden')
    }

    const handleFieldChange = (evt) => {
        const stateToChange = { ...equipment };
        stateToChange[evt.target.id] = evt.target.value;
        setEquipment(stateToChange);
    };

    const handleOptionSelect = (evt) => {
        const stateToChange = { ...equipment }
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setEquipment(stateToChange)
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

    async function fetchEquipmentById () {
        await ApiManager.getOne("equipments", equipmentId)
        .then(res => setEquipment(res))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (equipment.name === "") {
            window.alert("please name the equiment")
        } else {
            ApiManager.update("equipments", equipmentId, equipment)
            .then(res => props.history.push(`/equipment`))
        }
    };

    useEffect(() => {
        fetchEquipmentTypes();
        fetchRentalHouses();
        fetchEquipmentById();
    }, []);

    useEffect(() => {
        createRentalHouseListOptionsList();
    }, [rentalHouses]);

    useEffect(() => {
        createEquipmentTypeOptionsList();
    }, [equipmentTypes]);

    if (equipment) {
    return (
        <>
            <input
                type="text"
                id="name"
                placeholder="Equipment Name"
                defaultValue={equipment.name}
                onChange={handleFieldChange}
            />
            <input
                type="text"
                id="weight"
                placeholder="Weight in KG"
                defaultValue={equipment.weight}
                onChange={handleFieldChange}
            />

            <select
                id="equipment_type_id"
                defaultValue={equipment.equipment_type_id}
                onChange={handleOptionSelect}>

                <option className="form-control">Equipment Type</option>
                {createEquipmentTypeOptionsList()}

            </select>

            <label>Wireless?</label>
            <input type="checkbox"
                onChange={handleCheckBox}
                defaultValue={equipment.wirless}
            />

            <div onClick={toggleRentalForm}>Rental?</div>

            <div className="hidden" id="rental-form">

                <input
                    type="date"
                    id="return_date"
                    placeholder="Return Date"
                    defaultValue={equipment.return_date}
                    onChange={handleFieldChange}
                />

                <select
                    id="rental_house_id"
                    defaultValue={equipment.rental_house_id}
                    onChange={handleOptionSelect}>

                    <option className="form-control">Rental House</option>
                    {createRentalHouseListOptionsList()}

                </select>
            </div>

            <button id="submit-button" type="submit" onClick={handleSubmit}>submit</button>
        </>
    )} else {return (<div></div>)}
};

export default EquipmentEditForm