import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const StaffDetails = props => {

    const [employee, setEmployee] = useState({});
    const [photoshootStaff, setPhotoshootStaff] = useState([]);
    const [isActive, setIsActive] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const activateButtonText = () => {
        if (employee.user) {
            if (employee.user.is_active === true) {
                return "Deactivate"
            } else if (employee.user.is_active === false) {
                return "Activate"
            }
        }
    }

    const canEdit = () =>
        sessionStorage.getItem("is_superuser") === "true" || sessionStorage.getItem("userId") === `${employee.user_id}`

    const canActivate = () =>
        sessionStorage.getItem("is_superuser") === "true"

    async function fetchEmployee() {
        await ApiManager.getOne("employees", props.employeeId)
            .then(res => {
                setIsActive(res.user.is_active)
                setEmployee(res)
            });
    };

    async function fetchPhotoshootStaff() {
        await ApiManager.query("photoshootstaffs", "employee_id", props.employeeId)
            .then(res => setPhotoshootStaff(res));
    }

    const handleActivate = () => {
        const isActiveObject = {
            is_active: !isActive
        }
        ApiManager.update("isactives", props.employeeId, isActiveObject)
            .then(() => setRefresh(true))
    }

    function createContent() {
        if (employee.user) {
            return (
                <>
                    {canEdit() ?
                        <button
                            id="employee-edit-button"
                            onClick={() => props.history.push(`/employee/edit/${employee.id}`)}
                        >Edit</button>
                        : null}

                    <section id="employee-card">
                        <div>{employee.user.first_name} {employee.user.last_name}</div>
                        <div>{employee.city}</div>
                        <div>{employee.user.email}</div>
                        <div>{employee.phone}</div>
                        {employee.user.is_active === true ?
                            <div>Active</div>
                            : <div>Inactive</div>}
                            
                        {canActivate() ?
                            <button
                                id="acitvate-button"
                                onClick={handleActivate}
                            >{activateButtonText()}</button>
                            : null}
                    </section>

                    {/* {canActivate() ? 
                    <} */}

                    {photoshootStaff.photoshoot ? <div>{photoshootStaff.photoshoot.name}</div> : null}
                </>
            );
        };
    };

    useEffect(() => {
        fetchEmployee();
        fetchPhotoshootStaff();
        setRefresh(false);
    }, [refresh])

    return (
        <>
            {createContent()}
        </>
    )
};

export default StaffDetails