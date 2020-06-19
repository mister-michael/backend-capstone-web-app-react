import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import PhotoshootListItem from './PhotoshootListItem';
import './Photoshoot.css'

const Photoshoot = props => {

    const [photoshoots, setPhotoshoots] = useState([])

    const getPhotoshoots = () => {
        ApiManager.getAll("photoshoots").then(res => setPhotoshoots(res))
    }

    useEffect(() => {
        getPhotoshoots();
    }, [])

    return (
        <>
            <container className="photoshoot-container">
                <h2>Photoshoots</h2>
                {photoshoots.map(res =>
                    <PhotoshootListItem
                    {...props}
                        pshoot={res}
                    />)}
            </container>
        </>
    )
};

export default Photoshoot