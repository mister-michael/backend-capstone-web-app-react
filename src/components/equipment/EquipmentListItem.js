import React from 'react';
import '../photoshoot/Photoshoot.css';

const EquipmentListItem = props => {

    console.log(props.equipment.equipment_id)

    return (
        <>
            
                <div 
                className="photoshoot-details-div"
                onClick={() => props.history.push(`/equipments/${props.equipment.equipment_id}`)}
                >{props.equipment.equipment.name}</div>
        </>
    )
}

export default EquipmentListItem