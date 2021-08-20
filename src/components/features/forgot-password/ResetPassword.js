import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Controller, useForm } from "react-hook-form";

export default function ResetPassword() {
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();

    const [account, setAccount] = useState();
    let [message, setMessage] = useState();
    const handleAccount = (e) => {
        let { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    let resetPassword = async (data) => {
        try {
            if (data?.newPs !== data?.password) {
                setMessage("Mật khẩu bạn nhập lại chưa đúng")
            } else {
                let path = '/reset-password';
                let resp = await API.anonymousJSONPost(path, {
                    token: data?.token,
                    password: data?.password
                });
                console.log(data)
                if (resp.ok) {
                    setShow(true)
                    history.push('/')
                } else {
                    let response = await resp.json();
                    setMessage(response?.message)
                }
            }
        } catch (error) {

        }

    }
    let history = useHistory();
    return (
        <>
            <ModalSuccess show={show} handleClose={handleClose} />
            <div>
                <div id="intro">
                    <div className="middle signin">
                        <div className="login-panel">
                            <div className="logo text-center"><br />
                                <div onClick={() => {
                                    history.push('/')
                                }}
                                    style={{ cursor: 'pointer' }}
                                ><p style={{ fontStyle: 'italic', fontSize: '35px', color: 'white' }}><b>AMS Building</b></p></div><br /><br />
                            </div>

                            <div className="form-group" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className="form-control"
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                            }}
                                            placeholder="Mã xác minh ..."
                                            value={value}
                                            style={{ width: '100%', paddingLeft: 20, border: 'none' }}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="token"
                                    defaultValue=""
                                />
                                <br />
                                <div>{errors?.token && <div style={{ color: 'yellow' }}>Trường này không được bỏ trống!</div>}</div>

                            </div>
                            <div className="form-group" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>


                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className="form-control"
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                            }}
                                            placeholder="Mật khẩu mới"
                                            value={value}
                                            type="password"
                                            style={{ width: '100%', paddingLeft: 20, border: 'none' }}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="password"
                                    defaultValue=""
                                />
                                <br />
                                <div>{errors?.password && <div style={{ color: 'yellow' }}>Trường này không được bỏ trống!</div>}</div>

                            </div>
                            <div className="form-group" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>


                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className="form-control"
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                            }}
                                            placeholder="Xác nhận mật khẩu mới"
                                            value={value}
                                            type="password"
                                            style={{ width: '100%', padding: 20, border: 'none' }}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="newPs"
                                    defaultValue=""
                                />
                                <br />
                                <div>{errors?.newPs && <div style={{ color: 'yellow' }}>Trường này không được bỏ trống!</div>}</div>

                            </div>
                            <div>{message && <>{message}</>}</div>
                            <br />
                            {/* <div>
                                <p>{message && message}</p>
                            </div> */}
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={handleSubmit(resetPassword)} >
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Thay đổi mật khẩu
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



function ModalSuccess({ show, handleClose }) {
    let history = useHistory()
    return <>
        <Modal show={show} onHide={handleClose} animation={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn đã đổi mật khẩu thành công!. Ấn tiếp tục để quay về đăng nhập
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    history.push('/')
                    handleClose()
                }}>
                    Tiếp tục
                </Button>
                {/* <Button variant="primary" onClick={handleCloseMessage}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>
    </>
}