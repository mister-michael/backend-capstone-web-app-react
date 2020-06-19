import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import EquipmentListItem from '../equipment/EquipmentListItem';
import StaffListItem from '../staff/StaffListItem';
import './Photoshoot.css'

const PhotoshootDetails = props => {

    const [photoshoot, setPhotoshoot] = useState(null)
    const [equipment, setEquipment] = useState([])
    const [staff, setStaff] = useState([])
    const [employeeUrlState, setEmployeeUrlState] = useState("")


    async function fetchPhotoshoot() {
        await ApiManager.getOne("photoshoots", props.photoshootId)
            .then(res => {
                console.log(res)
                setPhotoshoot(res)
            })
    };

    async function fetchPhotoshootEquipment() {
        await ApiManager.queryPhotoshootEquipment(props.photoshootId)
            .then(res => {
                console.log(res)
                setEquipment(res)
            })
    };

    async function fetchPhotoShootStaff() {
        await ApiManager.queryPhotoshootStaff(props.photoshootId)
            .then(res => {
                console.log(res)
                setStaff(res)
            });
    }

    function createPhotoshootContent() {
        if (photoshoot) {
            return (
                <div className="photoshoot-details-container">
                    <div className="photoshoot-details-empty-div"><a className="psd-heading">{photoshoot.name}</a></div>
                    <div className="photoshoot-details-div">{photoshoot.name}</div>
                    <div className="photoshoot-details-div">{photoshoot.date_scheduled}</div>
                    <div className="photoshoot-details-div">{photoshoot.location}</div>
                    <div className="photoshoot-details-div">
                        {photoshoot.indoor ? "Indoor" : "Outdoor"}</div>
                    <div className="photoshoot-details-div">${photoshoot.charge}</div>
                    <div
                        className="photoshoot-details-div"
                        onClick={() => props.history.push(`${clientDetailsUrl()}`)}>
                        {photoshoot.client.first_name} {photoshoot.client.last_name} {photoshoot.client.id}</div>
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
            setEmployeeUrlState(splitEmployeeUrl)
            return splitEmployeeUrl[1]
        }
    }

    function createStaffContent() {
        if (staff.employee) {
            return staff.map(res => <div>{res.id}</div>)
        }
    }

    useEffect(() => {
        fetchPhotoshoot()
        fetchPhotoshootEquipment()
        fetchPhotoShootStaff()
    }, [])
    
    useEffect(() => {
        createPhotoshootContent()
    }, [photoshoot])
    
    useEffect(() => {
        createStaffContent()
        employeeSplitUrl()
    }, [staff.employee])

    return (
        <>
            {createPhotoshootContent()}

            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div"><a className="psd-equipment-heading">Equipment</a></div>

                {equipment.map(res => <EquipmentListItem equipment={res} key={res.id} {...props} />)}

            </div>

            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div"><a className="psd-equipment-heading">Staff</a></div>

                {staff.map(res =>
                    <StaffListItem
                        staff={res}
                        employeeUrl={employeeSplitUrl()}
                        onClick={() => props.history.push(`${employeeSplitUrl()}`)}
                        {...props}
                        key={res.id}
                    />)}

            </div>
        </>
    )
}

export default PhotoshootDetails