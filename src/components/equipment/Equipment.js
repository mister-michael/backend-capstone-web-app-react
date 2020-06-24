import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from './EquipmentListItem';

const Equipment = props => {

    const [equipmentList, setEquipmentList] = useState([])
    const [refresh, setRefresh] = useState(false)

    async function fetchEquipment () {
        await ApiManager.getAll("equipments")
        .then(res => setEquipmentList(res))
    };

    const handleDelete = (evt) => {
        const equipmentToDeleteId = parseInt(evt.target.id.split("--")[1])
        ApiManager.delete("equipments", equipmentToDeleteId)
        .then(()=>setRefresh(true))
    }

    useEffect(()=>{
        fetchEquipment();
        setRefresh(false)
    },[refresh])

    return (
        <>
        <button
        id="add-equipment-button"
        onClick={()=>props.history.push('/equipment/form')}
        >Add Equipment</button>
            {equipmentList.map(res => 
            <>
            <button
            id={`delete-equipment-button--${res.id}`}
            onClick={handleDelete}
            >delete</button>
            <EquipmentListItem equipment={res} from={"equipment-page"} {...props} key={res.id} />
            </>
            )}
        </>
    )
};

export default Equipment