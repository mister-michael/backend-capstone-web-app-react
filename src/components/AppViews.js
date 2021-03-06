import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import AuthMethods from './auth/AuthMethods';
import Photoshoot from './photoshoot/Photoshoot';
import PhotoshootDetails from './photoshoot/PhotoshootDetails';
import StaffDetails from './staff/StaffDetails';
import EquipmentDetails from './equipment/EquipmentDetails';
import ClientDetails from './client/ClientDetails';
import Clients from './client/Clients';
import Equipment from './equipment/Equipment';
import Staff from './staff/Staff';
import RentalHouseDetails from './rental/RentalHouseDetails';
import PhotoshootForm from './photoshoot/PhotoshootForm';
import EquipmentForm from './equipment/EquipmentForm';
import AddEquipmentForm from './photoshoot/AddEquipmentForm';
import AddStaffToPhotoshootForm from './staff/AddStaffToPhotoshootForm';
import PhotoshootEditForm from './photoshoot/PhotoshootEditForm';
import ClientForm from './client/ClientForm';
import ClientEditForm from './client/ClientEditForm';
import StaffForm from './staff/StaffForm';
import StaffEditForm from './staff/StaffEditForm';
import EquipmentEditForm from './equipment/EquipmentEditForm'


const AppViews = props => {

    const {isAuthenticated} = AuthMethods()

    return (
        <React.Fragment>
            <Route 
            exact
            path="/"
            render={props => {
                if (isAuthenticated()) {return <Redirect to="/photoshoots"/>} else {return <Login {...props} />}
            }}
            />
            <Route 
            path="/login"
            render={props => {
                if (isAuthenticated()) {return <Redirect to="/photoshoots"/>} else {return <Login {...props} />}
            }}
            />
            <Route 
            path="/register"
            render={props => {
                if (isAuthenticated()) { return <Redirect to="/photoshoots"/>} else { return <Register {...props} />}
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
            path="/photoshoot/form"
            render={props => {
                if (isAuthenticated()) {return <PhotoshootForm {...props} />}
            }}
            />
            <Route
            exact
            path="/photoshoot/edit/form/:photoshootId(\d+)"
            render={props => {
                if (isAuthenticated()) {return <PhotoshootEditForm photoshootId={parseInt(props.match.params.photoshootId)} {...props} />}
            }}
            />
            <Route
            exact
            path="/photoshoots/equipment/:photoshootId(\d+)"
            render={props => {
                if (isAuthenticated()) {return <AddEquipmentForm photoshootId={parseInt(props.match.params.photoshootId)} {...props} />}
            }}
            />
            <Route
            exact
            path="/photoshoots/staff/:photoshootId(\d+)"
            render={props => {
                if (isAuthenticated()) {return <AddStaffToPhotoshootForm photoshootId={parseInt(props.match.params.photoshootId)} {...props} />}
            }}
            />
            <Route
            exact
            path="/employees"
            render={props => {
                if (isAuthenticated()) {return <Staff {...props} />}
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
            path="/employee/edit/:employeeId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <StaffEditForm 
                    employeeId={parseInt(props.match.params.employeeId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/employee/form"
            render={props => {
                if (isAuthenticated()) {return <StaffForm {...props} />}
            }}
            />
            <Route
            exact
            path="/equipment"
            render={props => {
                if (isAuthenticated()) {return <Equipment {...props} />}
            }}
            />
            <Route
            exact
            path="/equipment/form"
            render={props => {
                if (isAuthenticated()) {return <EquipmentForm {...props} />}
            }}
            />
            <Route
            exact
            path="/equipments/:equipmentId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <EquipmentDetails 
                    key={props.match.params.equipmentId}
                    equipmentId={parseInt(props.match.params.equipmentId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/equipment/edit/:equipmentId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <EquipmentEditForm 
                    key={props.match.params.equipmentId}
                    equipmentId={parseInt(props.match.params.equipmentId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/clients"
            render={props => {
                if (isAuthenticated()) {return <Clients {...props} />}
            }}
            />
            <Route
            exact
            path="/clients/:clientId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <ClientDetails 
                    clientId={parseInt(props.match.params.clientId)} 
                    {...props} />
                }
            }}
            />
            <Route
            exact
            path="/client/form"
            render={props => {
                if (isAuthenticated()) {return <ClientForm {...props} />}
            }}
            />
            <Route
            exact
            path="/client/edit/:clientId(\d+)"
            render={props => {
                if (isAuthenticated()) {return <ClientEditForm clientId={parseInt(props.match.params.clientId)}  {...props} />}
            }}
            />
            <Route
            exact
            path="/rentals/:rentalId(\d+)"
            render={props => {
                if (isAuthenticated()) {
                    return <RentalHouseDetails 
                    rentalId={parseInt(props.match.params.rentalId)} 
                    {...props} />
                }
            }}
            />
        </React.Fragment>
    )
}

export default AppViews