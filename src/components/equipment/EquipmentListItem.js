import React from 'react';
import '../photoshoot/Photoshoot.css';
import ApiManager from '../../modules/ApiManager';

const EquipmentListItem = props => {

    const from = props.from



    const createContent = () => {
        if (from === "photoshoot-details" || from === "add-equipment") {
            return (
                <>
                    <div
                        className="photoshoot-details-div"
                        onClick={() => props.history.push(`/equipments/${props.equipment.equipment_id}`)}
                    >{props.equipment.equipment.name}</div>
                    <div
                        className=""
                        id={props.equipment.id}
                        onClick={props.deleteEquipment}
                    >Delete</div >
                </>
            )
        }
        else if (from === "equipment-page") {
            return (
                <>
                    <div className="nothing-div">

                        <div
                            className="photoshoot-details-div"
                            onClick={() => props.history.push(`/equipments/${props.equipment.id}`)}
                        >{props.equipment.name}
                        </div>
                            <div
                                className="equipment-delete-button"
                                id={`delete-equipment-button--${props.equipment.id}`}
                                onClick={props.handleDelete}
                            >x</div >
                    </div>
                </>

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