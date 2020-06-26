import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import StaffListIem from './StaffListItem';
import StaffDetails from './StaffDetails';

const Staff = props => {

    const canCreate = () =>
        sessionStorage.getItem("is_superuser") === "true"


    const [employees, setEmployees] = useState([])

    async function fetchEmployees() {
        await ApiManager.getAll("employees")
            .then(res => setEmployees(res));
    };

    useEffect(() => {
        fetchEmployees();
    }, [])

    return (
        <>
            <section className="page-container bubble page-margins">
                

                {canCreate() ?
                    <div
                    className="create-button page-margins"
                        id="create-employee-button"
                        onClick={() => props.history.push('/employee/form')}
                    >+</div>
                    : null}
                    <div className="bubble psd-heading">Employees</div>
                {employees.map(res =>
                    <StaffListIem
                        is_active={res.user.is_active}
                        staff={res}
                        from={"employees-page"}
                        {...props}
                        key={res.id} />)}
            </section>
        </>
    )
};

export default Staff