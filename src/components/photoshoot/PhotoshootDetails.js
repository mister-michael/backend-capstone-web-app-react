import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './Photoshoot.css'

const PhotoshootDetails = props => {

    const [photoshoot, setPhotoshoot] = useState(null)

    let indoorText = ""
    // photoshoot.indoor : indoorText = "Indoor" d
    async function fetchPhotoshoot() {
        await ApiManager.getOne("photoshoots", props.photoshootId)
            .then(res => {
                console.log(res)
                setPhotoshoot(res)
            })
    };

    function clientDetailsUrl() {
        if (photoshoot) {
            const url = photoshoot.client.url.split("http://localhost:8000");
            return url[1]
        }
    }
    function createContent() {
        if (photoshoot) {
            return (
                <div className="photoshoot-details-container">
                    <div className="photoshoot-details-empty-div"><a className="psd-heading">{photoshoot.name}</a></div>
                    <div className="photoshoot-details-div">{photoshoot.name}</div>
                    <div className="photoshoot-details-div">{photoshoot.date_scheduled}</div>
                    <div className="photoshoot-details-div">{photoshoot.location}</div>
                    <div className="photoshoot-details-div">
                        {photoshoot.indoor ? "Indoor" : "Outdoor"}</div>
                    <div className="photoshoot-details-div">${photoshoot.charge}</div>
                    <div
                        className="photoshoot-details-div"
                        onClick={() => props.history.push(`${clientDetailsUrl()}`)}>
                        {photoshoot.client.first_name} {photoshoot.client.last_name} {photoshoot.client.id}</div>
                </div>
            )
        }
    }

    useEffect(() => {
        fetchPhotoshoot()
    }, [])

    useEffect(() => {
        createContent()
    }, [photoshoot])

    return (
        <>
            {createContent()}
        </>
    )
}

export default PhotoshootDetails