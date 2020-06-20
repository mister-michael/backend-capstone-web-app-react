import React from 'react';
import './Photoshoot.css';

const PhotoshootListItem = props => {

    const dateFunction = () => {
        const datesplit = props.pshoot.date_scheduled.split("T")
        return datesplit[0]
    }

    return (
        <>
            <section className="photoshoot-details-empty-div">
                <div
                    className="photoshoot-details-container"
                    onClick={() => props.history.push(`/photoshoots/${props.pshoot.id}`)}
                >
                    <div className="photoshoot-details-empty-div photoshoots-title"><a className="red"></a>{props.pshoot.name}</div>
                    <div className="photoshoot-details-div">
                        <div className="">{dateFunction()}</div>
                        <div className="ps-list-item">{props.pshoot.location}</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PhotoshootListItem