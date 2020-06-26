import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Equipment.css'

const EquipmentDetails = props => {

    const [equipment, setEquipment] = useState({})
    const [photoshoots, setPhotoshoots] = useState(null)

    async function fetchEquipment() {
        await ApiManager.getOne("equipments", props.equipmentId)
            .then(res => setEquipment(res))
    }

    async function fetchPhotoshootEquipment() {
        await ApiManager.query("photoshootequipments", "equipment_id", props.equipmentId)
            .then(res => setPhotoshoots(res))
    };

    const createPhotoshootContent = () => {
        if (photoshoots) {
            photoshoots.map(res => {
                if (res.photoshoot.deleted === null) {
                    return (
                        <>
                            <section
                                onClick={() => props.history.push(`/photoshoots/${res.photoshoot_id}`)}
                            >
                                <div>Photoshoots:</div>
                                <div>{res.photoshoot.name}</div>
                            </section>
                        </>
                    )
                }
            })
        }
    }

    useEffect(() => {
        fetchEquipment();
        fetchPhotoshootEquipment();
    }, [])

    useEffect(() => {
        createPhotoshootContent();
    }, [photoshoots])



    return (
        <>

            <section className="bubble page-margins">
                {equipment.equipment_type ?
                    <>
                        <div className="bubble psd-heading">Equipment: {equipment.name}</div>
                    <div className="photoshoot-details-div">

                        <div>Weight: {equipment.weight}.0 lbs</div>
                        <div>Category: {equipment.equipment_type.name}</div>

                        {equipment.wireless !== null ? <div>wireless</div> : <div><a className="strikethrough">wireless</a></div>}

                        {equipment.rental_house !== null ?
                            <>
                                <section onClick={() => props.history.push(`/rentals/${equipment.rental_house_id}`)}>
                                    <div>Rental House:</div>
                                    <div>{equipment.rental_house.name}</div>
                                    <div>{equipment.rental_house.city}</div>
                                    <div>Return By: {equipment.return_date}</div>
                                </section>
                            </>
                            : null}

                            </div>
                    </>

                    : null}

                {createPhotoshootContent()}

            </section>

            <div
                className="create-button"
                id="edit-equipment-button"
                onClick={() => props.history.push(`/equipment/edit/${equipment.id}`)}
            >e</div>

        </>
    )
}

export default EquipmentDetails