import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Equipment.css'

const EquipmentDetails = props => {

    const [equipment, setEquipment] = useState({})
    const [photoshoots, setPhotoshoots] = useState([])

    async function fetchEquipment() {
        await ApiManager.getOne("equipments", props.equipmentId)
            .then(res => setEquipment(res))
    }

    async function fetchPhotoshootEquipment() {
        await ApiManager.query("photoshootequipments", "equipment_id", props.equipmentId)
            .then(res => setPhotoshoots(res))
    };

    const createPhotoshootContent = () => {
        return (
            photoshoots.map(res => {
                if (res.photoshoot.deleted === null) {
                    return (
                        <div>{res.photoshoot.name}</div>
                    )
                }
            }
            )
        )
    }

    useEffect(() => {
        fetchEquipment();
        fetchPhotoshootEquipment();
    }, [])

    return (
        <>
            {equipment.equipment_type ?
                <>
                    <div>{equipment.name}</div>
                    <div>Weight: {equipment.weight}.0 lbs</div>
                    <div>Category: {equipment.equipment_type.name}</div>

                    {equipment.wireless !== null ? <div>wireless</div> : <div><a className="strikethrough">wireless</a></div>}

                    {equipment.rental_house !== null ?
                        <>
                            <div>{equipment.rental_house.name}</div>
                            <div>{equipment.rental_house.city}</div>
                        </>
                        : null}

                </>

                : null}

            {createPhotoshootContent()}

        </>
    )
}

export default EquipmentDetails