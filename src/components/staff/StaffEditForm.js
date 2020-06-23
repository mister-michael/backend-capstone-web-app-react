import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const StaffEditForm = props => {

    const employeeId = props.employeeId

    const [employee, setEmployee] = useState(null);

    async function fetchEmployee () {
        await ApiManager.getOne("employees", employeeId)
        .then(res => {
            const employeeObjectForState = {
                first_name: res.user.first_name,
                last_name: res.user.last_name,
                email: res.user.email,
                phone: res.phone,
                city: res.city
            }
            setEmployee(employeeObjectForState)
        });
    }

    const handleFieldChange = (evt) => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const handleSubmit = () => {
        ApiManager.update("employees", employeeId, employee)
        .then(()=> props.history.push(`/employees/${employeeId}`))
    }

    useEffect(()=>{
        fetchEmployee();
    },[])

    if (employee) {
    return (
        <div>
            <input
                id="first_name"
                type="text"
                placeholder="First Name"
                defaultValue={employee.first_name}
                onChange={handleFieldChange}
            />
            <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                defaultValue={employee.last_name}
                onChange={handleFieldChange}
            />
            <input
                id="email"
                type="text"
                placeholder="Email"
                defaultValue={employee.email}
                onChange={handleFieldChange}
            />
            <input
                id="phone"
                type="text"
                placeholder="phone number (###-###-####)"
                defaultValue={employee.phone}
                onChange={handleFieldChange}
            />
            <input
                id="city"
                type="text"
                placeholder="City of Residence"
                defaultValue={employee.city}
                onChange={handleFieldChange}
            />
            
            
            <button
                id="register-button"
                type="submit"
                onClick={handleSubmit}
            >Update Employee</button>
        </div>
    )} else {return (<div></div>)}
}

export default StaffEditForm