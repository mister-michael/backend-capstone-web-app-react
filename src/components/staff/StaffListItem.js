import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';


const StaffListItem = props => {

    const [employee, setEmployee] = useState({})

    let from = props.from

    async function fetchEmployee() {
        await ApiManager.getOne("employees", props.staff.employee_id)
            .then(res => setEmployee(res))
    }

    function createContent() {
        if (from === "photoshoot-details") {
            if (employee.user) {
                return (
                    <div
                        onClick={() => props.history.push(`/employees/${props.staff.employee_id}`)}
                        className="photoshoot-details-div"
                        employee={employee}
                        employeeid={props.staff.employee_id}
                    >{employee.user.first_name} {employee.user.last_name}</div>
                )
            }
        } else if (from === "employees-page") {
            return (
                <div
                onClick={() => props.history.push(`/employees/${props.staff.employee_id}`)}
                className="photoshoot-details-div"
                employeeid={props.staff.employee_id}
            >{props.staff.user.first_name} {props.staff.user.last_name}</div>
            )
        }
    }


    // async function fetchEmployee () {
    //     await ApiManager.getByUrl(props.staff.employee.url)
    //     .then(res => setEmployee(res))
    // }

    useEffect(() => {
        fetchEmployee()
    }, [employee])

    return (
        <>
            {createContent()}
        </>
    )
}

export default StaffListItem