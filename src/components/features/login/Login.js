import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';


export default function Login() {
    let history = useHistory();
    const [account, setAccount] = useState();

    let login = async () => {
        let path = "/login";
        let resp = await API.anonymousJSONPost(path, account);
        if (resp.status === 200) {
            let response = await resp.json();
            localStorage.setItem("token", response.accessToken);
            history.push('/admin')
        } else {
            alert("Tai khoan chua dung!")
        }
    }

    return (
        <>
            <div>
                <div id="intro">
                    <div className="middle signin">
                        <div className="login-panel">
                            <div className="logo text-center"><br />
                                <a href="#"><p style={{ fontStyle: 'italic', fontSize: '35px', color: 'white' }}><b>AMS Building</b></p></a><br /><br />
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="fas fa-user fa-fw" />
                                </label>
                                <input type="text" className="form-control" placeholder="Username" name="username" required onChange={(e) => setAccount({
                                    ...account,
                                    username: e.target.value
                                })} />
                            </div>
                            <div className="form-group">
                                <label>
                                    <i className="fas fa-key fa-fw" />
                                </label>
                                <input type="password" className="form-control" placeholder="Password" name="password" required onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                            </div>
                            <br />
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={() => login()}>
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Login
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <a className="link-effect" href="#">
                                    </a>
                                    <a className="link-effect float-right" href="forgotPassword.html">
                                        <i className="fas fa-question fa-fw mr-1" />Forgot password
                                    </a><br /><br />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}