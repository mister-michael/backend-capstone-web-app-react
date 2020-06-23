import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import PhotoshootListItem from './PhotoshootListItem';
import './Photoshoot.css'

const Photoshoot = props => {

    const [photoshoots, setPhotoshoots] = useState([])

    const getPhotoshoots = () => {
        ApiManager.getAll("photoshoots").then(res => setPhotoshoots(res))
    }

    const deletePhotoshoots = (evt) => {
        ApiManager.delete("photoshoots", evt.target.id)
        .then(() => props.history.push('photoshoots'))
    }

    useEffect(() => {
        getPhotoshoots();
    }, [])

    return (
        <>
            <section className="photoshoot-container">

                <div className="photoshoots-header">
                    <h2 className="photoshoots-name">Photoshoots</h2>
                    <button className="create-button" onClick={() => props.history.push(`/photoshoot/form`)}>+</button>
                </div>

                {photoshoots.map(res =>
                <>
                <button
                id={res.id}
                onClick={deletePhotoshoots}
                >Delete</button>
                    <PhotoshootListItem
                        {...props}
                        pshoot={res}
                        key={res.id}
                    />
                    </>
                    )}
            </section>
        </>
    )
};

export default Photoshoot