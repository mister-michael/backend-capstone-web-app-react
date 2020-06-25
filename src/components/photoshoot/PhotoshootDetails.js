import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from '../equipment/EquipmentListItem';
import StaffListItem from '../staff/StaffListItem';
import './Photoshoot.css'

const PhotoshootDetails = props => {

    const [photoshoot, setPhotoshoot] = useState(null)
    const [equipment, setEquipment] = useState([])
    const [staff, setStaff] = useState([])
    const [refresh, setRefresh] = useState(false)

    async function fetchPhotoshoot() {
        await ApiManager.getOne("photoshoots", props.photoshootId)
            .then(res => {
                setPhotoshoot(res)
            })
    };

    async function fetchPhotoshootEquipment() {
        await ApiManager.queryPhotoshootEquipment(props.photoshootId)
            .then(res => {
                setEquipment(res)
            })
    };

    async function fetchPhotoShootStaff() {
        await ApiManager.queryPhotoshootStaff(props.photoshootId)
            .then(res => {
                setStaff(res)
            });
    }

    function createPhotoshootContent() {
        if (photoshoot) {
            return (
                <div className="page-container">
                    <div className="bubble">
                        <a className="psd-heading">{photoshoot.name}</a>
                        <div
                        className="create-button"
                            id={photoshoot.id}
                            onClick={() => props.history.push(`/photoshoot/edit/form/${photoshoot.id}`)}
                        >e</div>
                    </div>

                    {photoshoot.client !== null ?
                        <div
                            className="photoshoot-details-div"
                            onClick={() => props.history.push(`${clientDetailsUrl()}`)}>
                            {photoshoot.client.first_name} {photoshoot.client.last_name}</div>
                        :
                        <div className="photoshoot-details-div">no client added</div>}

                    <div className="photoshoot-details-div">{photoshoot.date_scheduled}</div>
                    <div className="photoshoot-details-div">{photoshoot.location}</div>
                    <div className="photoshoot-details-div">
                        {photoshoot.indoor ? "Indoor" : "Outdoor"}</div>
                    <div className="photoshoot-details-div">${photoshoot.charge}</div>
                </div>
            )
        }
    }

    function clientDetailsUrl() {
        if (photoshoot) {
            const url = photoshoot.client.url.split("http://localhost:8000");
            return url[1]
        }
    }


    function employeeSplitUrl() {
        if (staff.employee) {
            const splitEmployeeUrl = staff.employee.url.split("http://localhost:8000")
            console.log(splitEmployeeUrl[1])
            return splitEmployeeUrl[1]
        }
    }

    function createStaffContent() {
        if (staff.employee) {
            return staff.map(res => <div>{res.id}</div>)
        }
    };

    const deleteStaff = (evt) => {
        ApiManager.delete("photoshootstaffs", evt.target.id)
        setRefresh(true)
    };

    const deleteEquipment = evt => {
        ApiManager.delete("photoshootequipments", evt.target.id)
    }

    useEffect(() => {
        fetchPhotoshoot()
        fetchPhotoshootEquipment()
        fetchPhotoShootStaff()
        setRefresh(false)
    }, [refresh])

    useEffect(() => {
        createPhotoshootContent()
    }, [refresh])

    useEffect(() => {
        createStaffContent()
        employeeSplitUrl()
    }, [refresh])

    return (
        <>
            <div className="bubble page-margins">
                {createPhotoshootContent()}

                <div className="photoshoot-details-container">
                    <div className="bubble">
                        <a className="psd-equipment-heading">Equipment</a>
                        <div className="create-button" onClick={() => props.history.push(`equipment/${photoshoot.id}`)}>+</div>
                    </div>

                    {equipment.map(res =>
                        <>
                            <div className="list-container">
                                <EquipmentListItem
                                    from={"photoshoot-details"}
                                    equipment={res}
                                    key={res.id}
                                    {...props}
                                    from={"photoshoot-details"}
                                    deleteEquipment={deleteEquipment}
                                />
                            </div>
                        </>)}

                </div>

                <div className="page-container">
                    <div className="bubble">
                        <a className="psd-equipment-heading">Staff</a>
                        <div className="create-button" onClick={() => props.history.push(`staff/${photoshoot.id}`)}>+</div>
                    </div>

                    {staff.map(res =>
                        <>
                            <StaffListItem
                                from={"photoshoot-details"}
                                staff={res}
                                employeeUrl={employeeSplitUrl()}
                                onClick={() => props.history.push(`${employeeSplitUrl()}`)}
                                {...props}
                                key={res.id}
                            />
                            <div
                                id={res.id}
                                onClick={deleteStaff}
                            >Delete</div >
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default PhotoshootDetails