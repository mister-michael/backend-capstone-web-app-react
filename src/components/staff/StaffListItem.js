import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';


const StaffListItem = props => {

    const [employee, setEmployee] = useState({})

    async function fetchEmployee () {
        await ApiManager.getOne("employees")
    }


    return (
        <>
            <div className="photoshoot-details-container">
                <div className="photoshoot-details-empty-div"><a className="psd-equipment-heading">Staff</a></div>
                <div className="photoshoot-details-div">{props.staff.employee.city}</div>
            </div>
        </>
    )
}

export default StaffListItem