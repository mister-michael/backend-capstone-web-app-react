import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const AddStaffToPhotoshootForm = props => {

    //if we want to show current staff on add staff page, have to access res.employee.url to see user info
    //
    // const [photoshootStaff, setPhotoshootStaff] = useState(null)

    const [allStaff, setAllStaff] = useState(null)

    const photoshootId = props.photoshootId

    //this is the function to fetch current photoshoot staff, doesn't access user table
    //
    // async function fetchPhotoshootStaff() {
    //     await ApiManager.queryPhotoshootStaff(photoshootId)
    //         .then(res => setPhotoshootStaff(res))
    // }

    async function fetchAllStaff() {
        await ApiManager.getAll("employees")
            .then(res => setAllStaff(res))
    }

    const addEmployeeToPhotoshoot = (evt) => {
        document.getElementById(evt.target.id).classList.toggle("green")

        const photoshootEmployeeObject = {
            photoshoot_id: photoshootId,
            employee_id: evt.target.id
        }
        ApiManager.create("photoshootstaffs", photoshootEmployeeObject)
    }


    useEffect(() => {
        fetchAllStaff();
    }, [])


    return (
        <>
            <div>ADD STAFF FORM</div>
            {allStaff ? allStaff.map(res =>
                <div
                    id={res.id}
                    className=""
                    onClick={addEmployeeToPhotoshoot}
                >{res.user.first_name} {res.user.last_name}</div>
            )
                : null}
        </>
    )
};

export default AddStaffToPhotoshootForm