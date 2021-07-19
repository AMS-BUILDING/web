/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/common/Dashboard";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftPanel from './components/common/LeftPanel';
import Login from "./components/features/login/Login";

const token = localStorage.getItem("token");
function Navigation() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (token) ? <Admin /> : <Login />
          }}>
          </Route>
          {/* <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/">
            <Admin />
          </Route> */}
        </Switch>
      </Router>
    </>

  );
}

function Admin() {

  return (
    <>
      <LeftPanel />
      <div id="right-panel" className="right-panel">
        <Header />
        <Dashboard />
        <Footer />
      </div>

    </>
  )
}

export default Navigation;
