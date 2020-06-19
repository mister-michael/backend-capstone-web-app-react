import React from 'react';
import './Photoshoot.css';

const PhotoshootListItem = props => {

    const dateFunction = () => {
        const datesplit = props.pshoot.date_scheduled.split("T")
        return datesplit[0]
    }

    return (
        <>
            <div 
            className="ps-list-item-container"
            onClick={() => props.history.push(`/photoshoots/${props.pshoot.id}`)}
            >
                <div className="ps-list-item">{dateFunction()}</div>
                <div className="ps-list-item">{props.pshoot.name}</div>
                <div className="ps-list-item">{props.pshoot.location}</div>
            </div>
        </>
    )
}

export default PhotoshootListItem