import React from 'react';

const RentalHouseListOptions = props => {

    return (
    <option className="form-control" value={props.rentalHouse.id}>{props.rentalHouse.name}</option>
    )
};

export default RentalHouseListOptions