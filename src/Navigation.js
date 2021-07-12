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
import Dashboard from "./components/common/Dashboard";
import { useState } from "react";
function Navigation() {
  const [page,setPage] = useState("home");
  const handlePage = (text) => {
    setPage(text)
  }
  return (
    <>
      <Router>
        <LeftPanel page={page} handlePage={handlePage} />
        <div id="right-panel" className="right-panel">
          <Header />
          <Dashboard page={page} />
          <Footer />
        </div>
      </Router>
    </>

  );
}

export default Navigation;
