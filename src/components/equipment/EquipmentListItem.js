import React from 'react';
import '../photoshoot/Photoshoot.css';

const EquipmentListItem = props => {

    const from = props.from

    console.log(props.equipment.equipment_id)

    const createContent = () => {
        if (from === "photoshoot-details") {
            return (
                <div
                    className="photoshoot-details-div"
                    onClick={() => props.history.push(`/equipments/${props.equipment.equipment_id}`)}
                >{props.equipment.equipment.name}</div>
            )
        }
        else if (from === "equipment-page") {
            return (
                <div
                    className="photoshoot-details-div"
                    onClick={() => props.history.push(`/equipments/${props.equipment.id}`)}
                >{props.equipment.name}xxxxx</div>

            )
        }
    }

    return (
        <>
            {createContent()}
        </>
    )
}

export default EquipmentListItem