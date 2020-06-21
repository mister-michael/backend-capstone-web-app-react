import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import AppViews from './components/AppViews';
import './main.css'

const ProjectM = props => {

    return (
        <>
            <Nav />
            <div className="main-body">
                <AppViews />
            </div>
        </>
    )
};

export default ProjectM