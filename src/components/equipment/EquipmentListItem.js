import React from 'react';
import '../photoshoot/Photoshoot.css';

const EquipmentListItem = props => {

    return (
        <>
            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div"><a className="psd-equipment-heading">Equipment</a></div>
                <div className="photoshoot-details-div">{props.equipment.equipment.name}</div>
            </div>
        </>
    )
}

export default EquipmentListItem