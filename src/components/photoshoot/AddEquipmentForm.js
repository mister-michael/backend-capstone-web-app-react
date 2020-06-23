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

    const toggleAddbutton = () => {
        const addButton = document.getElementById('add-button')
        addButton.classList.toggle('hidden')
    }

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

    // const createEquipmentContent = () => {
    //     if (photoshootEqiupment) {
    //         photoshootEqiupment.map(res => {
    //             if (res)
    //         })
    //     }
    // }

    const handleEquipmentTypeSelect = (evt) => {
        fetchEquipment(parseInt(evt.target.value));
        toggleAddbutton();
    };

    const selectEquipment = (evt) => {
        const stateToChange = {...equipmentToAdd};
        console.log(evt.target.value);
        stateToChange[evt.target.id] = parseInt(evt.target.id);
        setEquipmentToAdd(stateToChange);
        document.getElementById(evt.target.id).classList.toggle('green')
    }

    useEffect(() => {
        fetchPhotoshootEquipment();
        fetchEquipmentTypes();
    }, [])

    // useEffect(() => {
    //     fetchEquipment();
    // }, [eqTypeSelectedId])


    return (
        <>
            <div>EQUIPMENT</div>
            {/* {createEquipmentContent()} */}
            {photoshootEqiupment ? photoshootEqiupment.map(res => <div key={res.id}>{res.equipment.name}</div>) : null}

            <div>Add Equipment</div>
            <select
                id="equipment_type_id"
                onChange={handleEquipmentTypeSelect}
            >
                <option className="form-control">Equipment Type</option>
                {equipmentTypes ? equipmentTypes.map(res => <option value={res.id}>{res.name}</option>) : null}
            </select>

            <div>
                {availableEquipment ? availableEquipment.map(res =>

                    <>
                        <div 
                        id={res.id} 
                        className=""
                        onClick={selectEquipment}>{res.id}xxx{res.name}</div>
                    </>
                    ) : null}

                <button
                    id="add-button"
                    className="hidden"
                >add</button>
            </div>

        </>
    )
};

export default AddEquipmentForm