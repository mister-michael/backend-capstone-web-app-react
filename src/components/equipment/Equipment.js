import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from './EquipmentListItem';

const Equipment = props => {

    const [equipmentList, setEquipmentList] = useState([])

    async function fetchEquipment () {
        await ApiManager.getAll("equipments")
        .then(res => setEquipmentList(res))
    };

    useEffect(()=>{
        fetchEquipment();
    },[])

    return (
        <>
        <button
        id="add-equipment-button"
        onClick={()=>props.history.push('/equipment/form')}
        >Add Equipment</button>
            {equipmentList.map(res => <EquipmentListItem equipment={res} from={"equipment-page"} {...props} key={res.id} />)}
        </>
    )
};

export default Equipment