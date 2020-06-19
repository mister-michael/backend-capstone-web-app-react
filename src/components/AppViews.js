import React, {useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import AuthMethods from './auth/AuthMethods';
import Photoshoot from './photoshoot/Photoshoot';
import PhotoshootDetails from './photoshoot/PhotoshootDetails';
import StaffDetails from './staff/StaffDetails';
import EquipmentDetails from './equipment/EquipmentDetails'


const AppViews = props => {

    // const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {isAuthenticated} = AuthMethods()

    return (
        <React.Fragment>
            <Route 
            path="/login"
            render={props => {
                return <Login {...props} />
            }}
            />
            <Route 
            path="/register"
            render={props => {
                return <Register {...props} />
            }}
            />
            <Route
            exact
            path="/photoshoots"
            render={props => {
                if (isAuthenticated()) {return <Photoshoot {...props} />}
            }}
            />
            <Route
            exact
            path="/photoshoots/:photoshootId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <PhotoshootDetails 
                    photoshootId={parseInt(props.match.params.photoshootId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/employees/:employeeId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <StaffDetails 
                    employeeId={parseInt(props.match.params.employeeId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/equipments/:equipmentId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <EquipmentDetails 
                    equipmentId={parseInt(props.match.params.equipmentId)} 
                    {...props} />
                }
            }}
            />
        </React.Fragment>
    )
}

export default AppViews