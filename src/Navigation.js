/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
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

function Navigation() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

function Admin() {
  const [page, setPage] = useState("home");
  const handlePage = (text) => {
    setPage(text)
  }
  return (
    <>
      <LeftPanel page={page} handlePage={handlePage} />
      <div id="right-panel" className="right-panel">
        <Header />
        <Dashboard page={page} />
        <Footer />
      </div>
    </>
  )
}

export default Navigation;
