import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const StaffDetails = props => {

    const [employee, setEmployee] = useState({})

    async function fetchEmployee() {
        await ApiManager.getOne("employees", props.employeeId)
            .then(res => setEmployee(res))
    }

    function createContent() {
        if (employee.user) {
            return (
                <div>{employee.user.first_name}</div>
            )
        }
    }

    useEffect(() => {
        fetchEmployee()
    }, [])

    return (
        <>
            {createContent()}
        </>
    )
};

export default StaffDetails