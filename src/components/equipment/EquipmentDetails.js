import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Equipment.css'

const EquipmentDetails = props => {

    const [equipment, setEquipment] = useState({})

    async function fetchEquipment() {
        await ApiManager.getOne("equipments", props.equipmentId)
            .then(res => setEquipment(res))
    }

    useEffect(() => {
        fetchEquipment()
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

            {/* battery_count wireless return_date rental_house */}

        </>
    )
}

export default EquipmentDetails