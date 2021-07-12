/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Dashboard from "./components/common/Dashboard";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftPanel from './components/common/LeftPanel';

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
