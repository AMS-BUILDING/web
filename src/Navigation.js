/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import ForgotPassword from "./components/features/forgot-password/ForgotPassword";
import ResetPassword from "./components/features/forgot-password/ResetPassword";
import Login from "./components/features/login/Login";
import API from "./lib/API";
import { setPageRedux } from "./redux/PageSlice";

const token = localStorage.getItem("token");
const roleId = localStorage.getItem("roleId")
function Navigation() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              (token ? <Admin roleId={roleId} /> : <Login />)
            )
          }} >
          </Route>
          <Route exact path="/forward-password">
            <ResetPassword />
          </Route>
          <Route exact path="/forgot">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

function Admin({ roleId }) {
  const [roomName, setRoomName] = useState("");
  let handleRoomName = (room) => {
    setRoomName(room)
  }
  let dispatch = useDispatch()

  let handleClick = (item) => {
    dispatch(setPageRedux(JSON.parse(JSON.stringify(item))))
  };
  const [isChange,setIsChange] = useState(false);
  const handleChange = () => {
    setIsChange(!isChange)
  }
  return (
    <>
      <LeftPanel roleId={roleId} handleRoomName={handleRoomName} />
      <div id="right-panel" className="right-panel">
        <Header handleClick={handleClick} isChange={isChange} />
        <Dashboard roomName={roomName} handleRoomName={handleRoomName} handleChange={handleChange} />
        <Footer />
      </div>

    </>
  )
}

export default Navigation;
