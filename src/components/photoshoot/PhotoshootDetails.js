import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from '../equipment/EquipmentListItem';
import StaffListItem from '../staff/StaffListItem';
import './Photoshoot.css'

const PhotoshootDetails = props => {

    const [photoshoot, setPhotoshoot] = useState(null)
    const [equipment, setEquipment] = useState([])
    const [staff, setStaff] = useState([])

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
                <div className="photoshoot-details-container">
                    <div className="photoshoot-details-empty-div">
                        <a className="psd-heading">{photoshoot.name}</a>
                        <button
                            id={photoshoot.id}
                            onClick={() => props.history.push(`/photoshoot/edit/form/${photoshoot.id}`)}
                        >Edit</button>
                    </div>

                    {photoshoot.client_id !== undefined ?
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

    }

    useEffect(() => {
        fetchPhotoshoot()
        fetchPhotoshootEquipment()
        fetchPhotoShootStaff()
    }, [])

    useEffect(() => {
        createPhotoshootContent()
    }, [])

    useEffect(() => {
        createStaffContent()
        employeeSplitUrl()
    }, [])

    return (
        <>
            {createPhotoshootContent()}

            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div">
                    <a className="psd-equipment-heading">Equipment</a>
                    <button onClick={() => props.history.push(`equipment/${photoshoot.id}`)}>Add Equipment</button>
                </div>

                {equipment.map(res =>
                    <EquipmentListItem
                        from={"photoshoot-details"}
                        equipment={res}
                        key={res.id}
                        {...props}
                        from={"photoshoot-details"}
                    />)}

            </div>

            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div">
                    <a className="psd-equipment-heading">Staff</a>
                    <button onClick={() => props.history.push(`staff/${photoshoot.id}`)}>Add Staff</button>
                </div>

                {staff.map(res =>
                    <>
                        <button
                            id={res.id}
                            onClick={deleteStaff}
                        >Delete</button >
                        <StaffListItem
                            from={"photoshoot-details"}
                            staff={res}
                            employeeUrl={employeeSplitUrl()}
                            onClick={() => props.history.push(`${employeeSplitUrl()}`)}
                            {...props}
                            key={res.id}
                        />
                    </>
                )}

            </div>
        </>
    )
}

export default PhotoshootDetails