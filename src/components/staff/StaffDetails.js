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

    console.log(parseInt(sessionStorage.getItem("userId")))


    const canEdit = () =>
        sessionStorage.getItem("is_superuser") === "true" || sessionStorage.getItem("userId") === `${employee.user_id}`

    const canActivate = () =>
        sessionStorage.getItem("is_superuser") === "true" && sessionStorage.getItem("userId") !== `${employee.user_id}`

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


                    <section 
                    className="page-container page-margins bubble"
                    id="employee-card">
                        <div className="psd-heading bubble">{employee.user.first_name} {employee.user.last_name}</div>
                        <div className="photoshoot-details-div">

                        <div>{employee.city}</div>
                        <div>{employee.user.email}</div>
                        <div>{employee.phone}</div>
                        {employee.user.is_active === true ?
                            <div>Active</div>
                            : <div>Inactive</div>}
                            </div>

                        {canActivate() ?
                            <div
                                id="acitvate-button"
                                onClick={handleActivate}
                            >{activateButtonText()}</div>
                            : null}
                        {canEdit() ?
                            <div
                                className="create-button"
                                id="employee-edit-button"
                                onClick={() => props.history.push(`/employee/edit/${employee.id}`)}
                            >e</div>
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