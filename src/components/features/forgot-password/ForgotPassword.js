import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';


export default function ForgotPassword() {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const forgot = async () => {
        let path = `/forward-password?email=${email}`;
        let resp = await API.anonymousJSONPost(path);
        if (resp.ok) {
            setMessage("Vui lòng check mail")
        } else {
            let response = await resp.json()
            setMessage(response?.message)
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
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <div>{message && <>{message}</>}</div>
                                {/* <input type="text" className="form-control" placeholder="Username" name="username" required onChange={(e) => setAccount({
                                    ...account,
                                    username: e.target.value
                                })} /> */}
                            </div>
                            {/* <div className="form-group">
                                <label>
                                    <i className="fas fa-key fa-fw" />
                                </label>
                                <input type="password" className="form-control" placeholder="Password" name="password" required onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                            </div> */}
                            <br />
                            {/* <div>
                                <p>{message && message}</p>
                            </div> */}
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={() => forgot()} >
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Login
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}