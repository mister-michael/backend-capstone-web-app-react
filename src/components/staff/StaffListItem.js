import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';


const StaffListItem = props => {

    const [employee, setEmployee] = useState({})

    async function fetchEmployee () {
        await ApiManager.getOne("employees", props.staff.employee_id)
        .then(res => setEmployee(res))
    }

    function createContent () {
        if (employee.user) {
            return (
                <div 
                onClick={() => props.history.push(`/employees/${props.staff.employee_id}`)}
                className="photoshoot-details-div"
                employee={employee}
                employeeId={props.staff.employee_id}
                >{employee.user.first_name} {employee.user.last_name}</div>
            )
        }
    }


    async function fetchEmployee () {
        await ApiManager.getByUrl(props.staff.employee.url)
        .then(res => setEmployee(res))
    }

    useEffect(() => {
        fetchEmployee()
    }, [])

    return (
        <>
            {createContent()}
        </>
    )
}

export default StaffListItem