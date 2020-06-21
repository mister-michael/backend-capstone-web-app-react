import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const RentalHouseDetails = props => {

    const [rentalHouse, setRentalHouse] = useState({})

    async function fetchRentalHouse() {
        await ApiManager.getOne("rentalhouses", props.rentalId)
            .then(res => setRentalHouse(res))
    };

    useEffect(() => {
        fetchRentalHouse();
    }, [rentalHouse.name])

    return (
        <>
            <div>{rentalHouse.name}</div>
            <div>{rentalHouse.phone}</div>
            <div>{rentalHouse.email}</div>
            <div>{rentalHouse.city}</div>
            
        </>
    )
};

export default RentalHouseDetails