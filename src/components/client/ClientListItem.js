import React from 'react';

const ClientListItem = props => {

    return (
        <>
            <div
            className=""
            onClick={() => props.history.push(`clients/${props.client.id}`)}
            >
                <div>{props.client.first_name} {props.client.last_name} xxx</div>
            </div>
        </>
    )
};

export default ClientListItem