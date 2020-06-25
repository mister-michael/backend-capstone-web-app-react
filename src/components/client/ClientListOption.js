import React from 'react';

const ClientListOption = props => {

    return (
        // <option value={props.client.id}>{props.client.first_name} {props.client.last_name}</option>
        <option value={props.client.id}>{props.client.first_name}</option>
    )
}

export default ClientListOption