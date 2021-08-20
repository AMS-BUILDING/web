import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';
import { Controller, useForm } from "react-hook-form";


export default function Login({ messageError }) {

    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();

    let history = useHistory()
    const [message, setMessage] = useState();
    useEffect(() => {
        localStorage.removeItem("page")
        localStorage.removeItem("token")
        localStorage.removeItem("roleId")
    }, [])

    let login = async (data) => {
        let path = "/login";
        let resp = await API.anonymousJSONPost(path, data);
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
            setMessage("Tài khoản chưa đúng!")
        }
    }
    console.log(errors?.username)
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
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className="form-control"
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                            }}
                                            placeholder="Email"
                                            value={value}
                                        // style={{ width: '100%', padding: 5, borderRadius: 8, border: 'none' }}
                                        />

                                    )}
                                    rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                                    name="username"
                                    defaultValue=""
                                />
                            </div>
                            <div>{errors?.username && <div style={{ color: 'yellow' }}>Mail bạn nhập chưa đúng!</div>

                            }</div>
                            <br />
                            <div className="form-group">
                                <label>
                                    <i class="fas fa-key fa-fw"></i>
                                </label>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            type="password"
                                            className="form-control"
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                            }}
                                            placeholder="Mật khẩu"
                                            value={value}
                                            style={{ border: 'none' }}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="password"
                                    defaultValue=""
                                />
                            </div>
                            <div>{errors?.password && <div style={{ color: 'yellow' }}>Chưa nhập mật khẩu!</div>}</div>
                            <br />
                            <div>
                                <p>{message && message}</p>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={handleSubmit(login)}>
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
                                        <i className="fas fa-question fa-fw mr-1" style={{ color: 'white' }} /><span style={{ color: 'white', fontWeight: 'bold' }}>Quên mật khẩu</span>
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