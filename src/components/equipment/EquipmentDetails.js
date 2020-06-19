import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';

const EquipmentDetails = props => {

    const [equipment, setEquipment] = useState({})

    async function fetchEquipment () {
        await ApiManager.getOne("equipments", props.equipmentId)
        .then(res => setEquipment(res))
    }

    useEffect(() => {
        fetchEquipment()
    }, [])

    return ( 
        <div>EQ EquipmentDetails</div>
    )
}

export default EquipmentDetails