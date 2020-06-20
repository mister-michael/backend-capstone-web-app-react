import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const StaffDetails = props => {

    const [employee, setEmployee] = useState({});
    const [photoshootStaff, setPhotoshootStaff] = useState([]);

    async function fetchEmployee() {
        await ApiManager.getOne("employees", props.employeeId)
            .then(res => setEmployee(res));
    };

    async function fetchPhotoshootStaff() {
        await ApiManager.query("photoshootstaffs", "employee_id", props.employeeId)
        .then(res => setPhotoshootStaff(res));
    }

    function createContent() {
        if (employee.user) {
            return (
                <>
                    <section id="employee-card">
                        <div>{employee.user.first_name} {employee.user.last_name}</div>
                        <div>{employee.city}</div>
                        <div>{employee.user.email}</div>
                        <div>{employee.phone}</div>
                    </section>
            {photoshootStaff.photoshoot ? <div>{photoshootStaff[0].photoshoot.name}</div> : null}
                </>
            );
        };
    };

    useEffect(() => {
        fetchEmployee();
        fetchPhotoshootStaff();
    }, [])

    return (
        <>
            {createContent()}
        </>
    )
};

export default StaffDetails