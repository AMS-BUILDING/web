import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';


export default function ForgotPassword() {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    let history = useHistory();
    const [show,setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    const forgot = async () => {
        let path = `/forward-password?email=${email}`;
        let resp = await API.anonymousJSONPost(path);
        if (resp.ok) {
            setShow(true)
        } else {
            let response = await resp.json()
            setMessage(response?.message)
        }
    }
    return (
        <>
            <div>
            <ModalSuccess show={show} handleClose={handleClose} />
                <div id="intro">
                    <div className="middle signin">
                        <div className="login-panel">
                            <div className="logo text-center"><br />
                                <div onClick={() => {
                                    history.push('/login')
                                }}><p style={{ fontStyle: 'italic', fontSize: '35px', color: 'white' }}><b>AMS Building</b></p></div><br /><br />
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="fas fa-user fa-fw" />
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email ..."
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
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Gửi
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col">
                                    <button className="btn btn-sm" onClick={() => {
                                        history.push('/login')
                                    }} >
                                        <i className="fas fa-sign-in-alt fa-fw mr-1" />Go to Login
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
                Vui lòng kiểm tra lại email!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    history.push('/forward-password')
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