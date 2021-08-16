import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';

export default function Login({ messageError }) {
    const [account, setAccount] = useState();
    let history = useHistory()
    const [message, setMessage] = useState();
    useEffect(() => {
        localStorage.removeItem("page")
        localStorage.removeItem("token")
        localStorage.removeItem("roleId")
    }, [])

    let login = async () => {
        let path = "/login";
        let resp = await API.anonymousJSONPost(path, account);
        if (resp.status === 200) {
            let response = await resp.json();

            if (response.roleId < 3) {
                localStorage.setItem("token", response.accessToken);
                localStorage.setItem("roleId", response.roleId);
                window.location.reload()
            } else {
                setMessage("Từ chối truy cập!")
            }
        } else {
            setMessage("Tài khoản hoặc mật khẩu chưa đúng!")
        }
    }

    return (
        <>
            <div>
                <div id="intro">
                    <div className="middle signin">
                        <div className="login-panel">
                            <div className="logo text-center"><br />
                                <div
                                    onClick={() => {
                                        history.push('/')
                                    }}
                                    style={{ cursor: 'pointer' }}
                                ><p style={{ fontStyle: 'italic', fontSize: '35px', color: 'white' }}><b>AMS Building</b></p></div><br /><br />
                            </div>

                            <div className="form-group">
                                <label>
                                    <i class="fas fa-user fa-fw"></i>
                                </label>
                                <input type="text" className="form-control" placeholder="Tên đăng nhập" name="username" required onChange={(e) => setAccount({
                                    ...account,
                                    username: e.target.value
                                })}
                                // style={{ paddingLeft: 8 }}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <i class="fas fa-key fa-fw"></i>
                                </label>
                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password" required onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })}
                                // style={{ paddingLeft: 8 }}
                                />
                            </div>
                            <br />
                            <div>
                                <p>{message && message}</p>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={() => login()}>
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Đăng nhập
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <a className="link-effect" href="#">
                                    </a>
                                    <a className="link-effect float-right" onClick={() => {
                                        history.push('/forgot')
                                    }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-question fa-fw mr-1" />Quên mật khẩu
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