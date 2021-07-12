/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LeftPanel from './components/common/LeftPanel';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Employee from "./components/features/employee/Employee";
import Department from "./components/features/department/Department";
import Building from "./components/features/building/Building";
import Resident from "./components/features/resident/Resident";
import Home from "./components/features/home/Home";
import Profile from "./components/features/profile/Profile";
import Service from "./components/features/service/Service";
import IsStaying from "./components/features/isstay/IsStaying";
import RequestService from "./components/features/request-service/RequestService";
import FeeBuilding from "./components/features/fee-building/FeeBuilding";
import FeeDepartment from "./components/features/fee-department/FeeDepartment";
import CardParking from "./components/features/card-parking/CardParking";
import CardDepartment from "./components/features/card-department/CardDepartment";
import Notification from "./components/features/notification/Notification";
import FeedBack from "./components/features/feedback/FeedBack";
import { useState } from 'react';

function Navigation() {

  return (
    <>
      <Router>
        <LeftPanel />
        <div id="right-panel" className="right-panel">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/department">
              <Department />
            </Route>
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/building">
              <Building />
            </Route>
            <Route path="/resident">
              <Resident />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/isstay">
              <IsStaying />
            </Route>
            <Route path="/request-service">
              <RequestService />
            </Route>
            <Route path="/fee-building">
              <FeeBuilding />
            </Route>
            <Route path="/fee-department">
              <FeeDepartment />
            </Route>
            <Route path="/card-parking">
              <CardParking />
            </Route>
            <Route path="/card-department">
              <CardDepartment />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/feedback">
              <FeedBack />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>

  );
}

export default Navigation;
