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
        .then(() => props.history.push('/photoshoots'))
    }

    useEffect(() => {
        getPhotoshoots();
    }, [])

    return (
        <>
            <section className="page-container">

                <div className="photoshoots-header">
                    {/* <h2 className="photoshoots-name">project M</h2> */}
                    <div className="bubble psd-heading">photoshoots</div>
                    <div className="create-button" onClick={() => props.history.push(`/photoshoot/form`)}>+</div>
                </div>

                {photoshoots.map(res =>
                <>
                
                    <PhotoshootListItem
                        {...props}
                        deletePhotoshoots={deletePhotoshoots}
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