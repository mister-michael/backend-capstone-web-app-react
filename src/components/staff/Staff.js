import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import StaffListIem from './StaffListItem';
import StaffDetails from './StaffDetails';

const Staff = props => {

    const [employees, setEmployees] = useState([])

    async function fetchEmployees() {
        await ApiManager.getAll("employees")
            .then(res => setEmployees(res));
    };

    useEffect(()=>{
        fetchEmployees();
    },[])

    return (
        <>
        <button
        id="create-employee-button"
        onClick={() => props.history.push('/employee/form')}
        >Create Employee</button>
        {employees.map(res => 
        <StaffListIem 
        staff={res} 
        from={"employees-page"}
        {...props} 
        key={res.id} />)}
        </>
    )
};

export default Staff