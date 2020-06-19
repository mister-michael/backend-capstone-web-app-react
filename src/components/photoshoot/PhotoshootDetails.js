import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Photoshoot.css'

const PhotoshootDetails = props => {

    const [photoshoot, setPhotoshoot] = useState([])

    let indoorText = ""
    // photoshoot.indoor : indoorText = "Indoor" d
    const fetchPhotoshoot = () => {
        ApiManager.getOne("photoshoots", props.photoshootId)
            .then(res => {
                console.log(photoshoot.client)
                setPhotoshoot(res)
            })
    };

    useEffect(() => {
        fetchPhotoshoot()
        console.log(photoshoot.first_name)
    }, [])
    return (
        <>
                <div className="photoshoot-details-container">
                    <div className="photoshoot-details-empty-div"><a className="psd-heading">{photoshoot.name}</a></div>
                    <div className="photoshoot-details-div">{photoshoot.name}</div>
                    <div className="photoshoot-details-div">{photoshoot.date_scheduled}</div>
                    <div className="photoshoot-details-div">{photoshoot.location}</div>
                    <div className="photoshoot-details-div">
                        {photoshoot.indoor ? "Indoor" : "Outdoor"}</div>
                    <div className="photoshoot-details-div">${photoshoot.charge}</div>
                    {/* <div> {photoshoot.client.last_name}</div> */}
                </div>
        </>
    )
}

export default PhotoshootDetails