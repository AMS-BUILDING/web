import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';


export default function ResetPassword() {

    const [account, setAccount] = useState({
        token: null,
        password: null
    });
    let [message,setMessage] = useState();
    const handleAccount = (e) => {
        let { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }
    let reset = async () => {
        let path = '/reset-password';
        let resp = await API.anonymousJSONPost(path,account);
        if(resp.ok){
            setMessage("Ban da doi mat khau thanh cong!")
        }else{
            let response = await resp.json();
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
                                <div>Ma token</div>
                                <label>
                                    <i className="fas fa-user fa-fw" />
                                </label>
                                <input type="text"
                                    value={account?.token}
                                    name="token"
                                    onChange={e => handleAccount(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <i className="fas fa-key fa-fw" />
                                </label>
                                <input type="password" className="form-control" placeholder="Password" name="password" required 
                                onChange={e => handleAccount(e)}
                            
                                />
                            </div>
                            <div>{message && <>{message}</>}</div>
                            <br />
                            {/* <div>
                                <p>{message && message}</p>
                            </div> */}
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={() => reset()} >
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Reset
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