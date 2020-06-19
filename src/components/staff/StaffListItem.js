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
                <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div"><a className="psd-equipment-heading">Staff</a></div>
                <div className="photoshoot-details-div">{employee.user.first_name}</div>
            </div>
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
}

export default StaffListItem