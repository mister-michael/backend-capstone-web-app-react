import React from 'react';

const EquipmentTypeListOptions = props => {

    return (
    <option value={props.equipmentType.id}>{props.equipmentType.name}</option>
    )
};

export default EquipmentTypeListOptions