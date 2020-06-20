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
            <section className="photoshoot-container">
                <h2 className="photoshoots-name">Photoshoots</h2>
                {photoshoots.map(res =>
                    <PhotoshootListItem
                    {...props}
                        pshoot={res}
                        key={res.id}
                    />)}
            </section>
        </>
    )
};

export default Photoshoot