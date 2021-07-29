import { useEffect, useState } from "react";
import API from "../../lib/API";

export default function Header({ handleClick }) {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    console.log(data)
    return <header id="header" className="header">
        <div className="header-menu">
            <div className="col-sm-7">
                <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></a>
                <div className="header-left">
                    <div className="dropdown for-notification">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="notification"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="count bg-danger">5</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="notification">
                            <p className="red">You have 3 Notification</p>
                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                <i className="fa fa-check"></i>
                                <p>Server #1 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                <i className="fa fa-info"></i>
                                <p>Server #2 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                <i className="fa fa-warning"></i>
                                <p>Server #3 overloaded.</p>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown for-message">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="message"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-email"></i>
                            <span className="count bg-primary">9</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="message">
                            <p className="red">You have 4 Mails</p>
                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                    <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jack Sanders</span>
                                    <span className="time float-right">5 minutes ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Cheryl Wheeler</span>
                                    <span className="time float-right">10 minutes ago</span>
                                    <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-3" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Rachel Santos</span>
                                    <span className="time float-right">15 minutes ago</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-5">
                <div className="user-area dropdown float-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <img className="user-avatar rounded-circle" 
                        src={` http://localhost:8081/download?image=${data?.image}` } alt="User Avatar" />
                    </a>

                    <div className="user-menu dropdown-menu">
                        <div onClick={() => handleClick("profile")}><i className="fa fa-user"></i> My Profile</div>

                        <div
                            onClick={() => {
                                localStorage.removeItem("token")
                                localStorage.removeItem("page")
                                localStorage.removeItem("roleId")
                                window.location.reload();
                            }}
                        ><i className="fa fa-power-off"></i> Logout</div>
                    </div>
                </div>

                <div className="language-select dropdown" id="language-select">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" id="language" aria-haspopup="true"
                        aria-expanded="true">
                        <i className="flag-icon flag-icon-us"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="language">
                        <div className="dropdown-item">
                            <span className="flag-icon flag-icon-fr"></span>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-es"></i>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-us"></i>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-it"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}