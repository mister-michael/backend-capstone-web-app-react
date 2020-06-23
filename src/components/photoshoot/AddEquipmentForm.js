import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Photoshoot.css'

const AddEquipmentForm = props => {

    const [photoshootEqiupment, setPhotoshootEquipment] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [equipmentTypes, setEquipmentTypes] = useState(null);
    const [availableEquipment, setAvailableEquipment] = useState(null);
    const [equipmentToAdd, setEquipmentToAdd] = useState(null)

    const photoshootId = props.photoshootId

    // const toggleAddbutton = () => {
    //     const addButton = document.getElementById('add-button')
    //     addButton.classList.toggle('hidden')
    // }

    async function fetchPhotoshootEquipment() {
        await ApiManager.queryPhotoshootEquipment(props.photoshootId)
            .then(res => { setPhotoshootEquipment(res) })
    };

    async function fetchEquipment(id) {
        await ApiManager.query("equipments", "photoshoot_id", photoshootId)
            .then(res => setAvailableEquipment(res));
    }

    async function fetchEquipmentTypes() {
        await ApiManager.getAll("equipmenttypes")
            .then(res => {
                setEquipmentTypes(res);
            })
    };

    const handleEquipmentTypeSelect = (evt) => {
        fetchEquipment(parseInt(evt.target.value));
        // toggleAddbutton();
    };

    //this creates a state array of id's to add, instead of changing stateToChange[taco] i need to just push the id into the array
    //
    // const selectEquipment = (evt) => {
    //     const stateToChange = { ...equipmentToAdd };
    //     stateToChange[evt.target.id] = parseInt(evt.target.id);
    //     setEquipmentToAdd(stateToChange);
    //     document.getElementById(evt.target.id).classList.toggle('green')
    // };

    //want to figure this out for multiple add functionality
    //
    // const submitAddedEquipment = () => {
    //     if (equipmentToAdd) {
    //         for (let i = 0; i < equipmentToAdd.length; i++) {

    //             const photoshootEquipmentObject = {
    //                 photoshoot_id: photoshootId,
    //                 equipment_id: equipmentToAdd[i]
    //             };

    //             console.log(photoshootEquipmentObject);
    //             console.log("BUTTON CLICKED");

    //             ApiManager.create("photoshootequipments", photoshootEquipmentObject);
    //         }
    //     }
    // };

    const addEquipment = (evt) => {
        console.log("clicked")
        document.getElementById(evt.target.id).classList.toggle("green")
        const equipmentObject = {
            photoshoot_id: photoshootId,
            equipment_id: evt.target.id
        }
        ApiManager.create("photoshootequipments", equipmentObject)
            .then(setRefresh(!refresh))
    }

    const deleteEquipment = (evt) => {
        const pseId = evt.target.id.split("--")[1]
        ApiManager.delete("photoshootequipments", pseId)
        .then(() => setRefresh(!refresh))
    }

    useEffect(() => {
        fetchPhotoshootEquipment();
        fetchEquipmentTypes();
    }, [])

    return (
        <>
            <div>EQUIPMENT</div>
            {/* {createEquipmentContent()} */}
            {photoshootEqiupment ? photoshootEqiupment.map(res =>
            <>
                <div id={res.id} key={res.id}>{res.equipment.name}</div>
                <button id={`button--${res.id}`} onClick={deleteEquipment}>Delete</button>
                </>
                )
                : null}

            <div>Add Equipment</div>
            <select
                id="equipment_type_id"
                onChange={handleEquipmentTypeSelect}
            >
                <option className="form-control">Equipment Type</option>
                {equipmentTypes ? equipmentTypes.map(res => <option key={res.id} value={res.id}>{res.name}</option>) : null}
            </select>

            <div>
                {availableEquipment ? availableEquipment.map(res =>

                    <>
                        <div
                            id={res.id}
                            className=""
                            onClick={addEquipment}>{res.id}xxx{res.name}</div>
                    </>
                ) : null}

                {/* <button
                    id="add-button"
                    type="submit"
                    className="hidden"
                    onClick={submitAddedEquipment()}
                >add</button> */}
            </div>

        </>
    )
};

export default AddEquipmentForm