import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import RentalHouseLIstItem from './RentalHouseListItem';

const Staff = props => {

    const [rentalHouses, setRentalHouses] = useState([])

    async function fetchRentalHouses() {
        await ApiManager.getAll("rentalhouses")
            .then(res => setRentalHouses(res));
    };

    useEffect(()=>{
        fetchRentalHouses();
    },[rentalHouses])

    return (
        <>
        {employees.map(res => 
        <StaffListIem 
        rentalHouse={res} 
        from={"rentalhouses-page"}
        {...props} 
        key={res.id} />)}
        </>
    )
};

export default Staff