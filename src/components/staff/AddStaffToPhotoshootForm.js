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

    let activeClass = "red"

    useEffect(() => {
        fetchAllStaff();
    }, [])


    return (
        <>
            <section className="">

                <div className="bubble page-margins">ADD STAFF FORM</div>
                {allStaff ? allStaff.map(res => {
                    { res.user.is_active === true ? activeClass = "" : activeClass = "red" }
                    return <div
                        id={res.id}
                        className={`${activeClass} photoshoot-details-div`}
                        onClick={addEmployeeToPhotoshoot}
                    >{res.user.first_name} {res.user.last_name}</div>
                }
                )
                    : null}
            </section>
        </>
    )
};

export default AddStaffToPhotoshootForm