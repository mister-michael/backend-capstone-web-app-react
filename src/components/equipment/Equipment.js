import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from './EquipmentListItem';

const Equipment = props => {

    const [equipmentList, setEquipmentList] = useState([])
    const [refresh, setRefresh] = useState(false)

    async function fetchEquipment() {
        await ApiManager.getAll("equipments")
            .then(res => setEquipmentList(res))
    };

    const handleDelete = (evt) => {
        const confirmed = window.confirm("are you sure?")
        if (confirmed === true) {
            const equipmentToDeleteId = parseInt(evt.target.id.split("--")[1])
            ApiManager.delete("equipments", equipmentToDeleteId)
                .then(() => setRefresh(true))
        }
    }

    useEffect(() => {
        fetchEquipment();
        setRefresh(false)
    }, [refresh])

    return (
        <>
            <section className="page-container bubble page-margins">
                <div
                    id="add-equipment-button"
                    className="create-button page-margins"
                    onClick={() => props.history.push('/equipment/form')}
                >+</div>
                <div className="bubble psd-heading">Equipment</div>
                <div className="page-container">
                    {equipmentList.map(res =>
                        <>

                            <EquipmentListItem equipment={res} from={"equipment-page"} {...props} key={res.id} handleDelete={handleDelete} />
                            {/* <div
                        className="equipment--button"
                            id={`delete-equipment-button--${res.id}`}
                            onClick={handleDelete}
                        >delete</div> */}
                        </>
                    )}
                </div>
            </section>
        </>
    )
};

export default Equipment