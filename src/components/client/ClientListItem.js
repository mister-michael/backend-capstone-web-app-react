import React from 'react';

const ClientListItem = props => {

    return (
        <>
            <section
            className=""
            onClick={() => props.history.push(`clients/${props.client.id}`)}
            >
                <div>{props.client.first_name} {props.client.last_name}</div>
                {/* <div>{props.client.phone}</div>
                <div>{props.client.email}</div> */}
            </section>
        </>
    )
};

export default ClientListItem