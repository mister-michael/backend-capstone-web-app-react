import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Photoshoot.css'

const AddEquipmentForm = props => {

    const [photoshootEqiupment, setPhotoshootEquipment] = useState(null);
    const [refresh, setRefresh] = useState(false);
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
        ApiManager.query("equipments", "equipment_type_id", evt.target.value)
            .then(res => setAvailableEquipment(res))
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
        // document.getElementById(evt.target.id).classList.toggle("green")
        const equipmentObject = {
            photoshoot_id: photoshootId,
            equipment_id: evt.target.id
        }
        ApiManager.create("photoshootequipments", equipmentObject)
            .then(setRefresh(true))
    }

    const deleteEquipment = (evt) => {
        const confirmed = window.confirm("are you sure?")
        if (confirmed === true) {
            const pseId = evt.target.id.split("--")[1]
            ApiManager.delete("photoshootequipments", pseId)
                .then(() => setRefresh(true))
        }
    }

    useEffect(() => {
        fetchPhotoshootEquipment();
        fetchEquipmentTypes();
        setRefresh(false)
    }, [refresh])

    useEffect(() => {

    }, [])

    return (
        <>
            <section className="bubble page-container page-margins">

                <div className="psd-heading">EQUIPMENT</div>
                {photoshootEqiupment ? photoshootEqiupment.map(res =>
                    <>
                        <div
                            className="photoshoot-details-div"
                            id={res.id} key={res.id}>{res.equipment.name}</div>
                        <div
                            className="" id={`button--${res.id}`} onClick={deleteEquipment}>Delete</div>
                    </>
                )
                    : null}
            </section>

            <section className="">

                <div
                    className="bubble">Add Equipment</div>

                <select className="" id="equipment_type_id" onChange={handleEquipmentTypeSelect}>

                    <option className="form-control">Eq.Type</option>
                    {equipmentTypes ? equipmentTypes.map(res => <option key={res.id} value={res.id}>{res.name}</option>) : null}
                </select>
            </section>

            <div>
                {availableEquipment ? availableEquipment.map(res =>

                    <>
                        <div
                            id={res.id}
                            className="photoshoot-details-div"
                            onClick={addEquipment}>{res.name}</div>
                    </>
                ) : null}

                {/* <div
                    onClick={()=> props.history.push("/photoshoots")}>{`<`}</div> */}

            </div>

        </>
    )
};

export default AddEquipmentForm