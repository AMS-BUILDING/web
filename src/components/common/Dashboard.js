import React, { useState } from 'react';
import Profile from '../features/profile/Profile';
import Department from '../features/department/Department';
import Employee from '../features/employee/Employee';
import Building from '../features/building/Building';
import Resident from '../features/resident/Resident';
import Service from '../features/service/Service';
import IsStaying from '../features/isstay/IsStaying';
import RequestService from '../features/request-service/RequestService';
import FeeBuilding from '../features/fee-building/FeeBuilding';
import FeeDepartment from '../features/fee-department/FeeDepartment';
import CardParking from '../features/card-parking/CardParking';
import CardDepartment from '../features/card-department/CardDepartment';
import Notification from '../features/notification/Notification';
import FeedBack from '../features/feedback/FeedBack';
import Home from '../features/home/Home';
import { useSelector } from 'react-redux';
export default function Dashboard({ roomName, handleRoomName,handleChange }) {
    let page = useSelector(state => state.page);

    return (
        <>

            {page === "home" && <Home />}
            {page === "profile" && <Profile handleChange={handleChange} />}
            {page === "department" && <Department handleRoomName={handleRoomName} />}
            {page === "employee" && <Employee />}
            {page === "building" && <Building />}
            {page === "resident" && <Resident roomName={roomName} handleRoomName={handleRoomName} />}
            {page === "service" && <Service />}
            {page === "isstay" && <IsStaying />}
            {page === "request-service" && <RequestService />}
            {page === "fee-building" && <FeeBuilding />}
            {page === "fee-department" && <FeeDepartment />}
            {page === "card-parking" && <CardParking />}
            {page === "card-department" && <CardDepartment />}
            {page === "notification" && <Notification />}
            {page === "feedback" && <FeedBack />}
            <footer className="footer">
                <div className="container text-center py-3">
                    <small className="copyright" style={{ color: 'white' }}>© 2021 Copyright <svg className="svg-inline--fa fa-heart fa-w-16" style={{ color: '#fb866a', width: '15px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>by <a className="app-link" href="index.html" style={{ color: 'white' }}>ams.building.com</a></small>
                </div>
            </footer>
        </>
    )
}