import React from 'react';
import '../photoshoot/Photoshoot.css';

const EquipmentListItem = props => {

    return (
        <>
            
                <div className="photoshoot-details-div">{props.equipment.equipment.name}</div>
        </>
    )
}

export default EquipmentListItem