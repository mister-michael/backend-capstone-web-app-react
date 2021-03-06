import React from 'react';
import './Photoshoot.css';

const PhotoshootListItem = props => {

    const dateFunction = () => {
        const datesplit = props.pshoot.date_scheduled.split("T")
        return datesplit[0]
    }

    return (
        <>
            <section className="bubble">
                <div className="photoshoot-details-container">
                    <div
                        id={props.pshoot.id}
                        className="delete-button"
                        onClick={props.deletePhotoshoots}
                    >x</div>

                    <section onClick={() => props.history.push(`/photoshoots/${props.pshoot.id}`)}>
                        <div className="bubble bubble-title">{props.pshoot.name}</div>
                        <div className="photoshoot-details-div">
                            <div className="">{dateFunction()}</div>
                            <div className="ps-list-item">{props.pshoot.location}</div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default PhotoshootListItem