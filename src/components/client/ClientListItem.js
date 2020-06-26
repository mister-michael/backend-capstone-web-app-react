import React from 'react';

const ClientListItem = props => {

    return (
        <>
            <div
            className="photoshoot-details-div"
            onClick={() => props.history.push(`clients/${props.client.id}`)}
            >
                <div>{props.client.first_name} {props.client.last_name}</div>
            </div>
        </>
    )
};

export default ClientListItem