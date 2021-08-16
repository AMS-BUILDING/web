import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function ResetPassword() {

    const [account, setAccount] = useState();
    let [message,setMessage] = useState();
    const handleAccount = (e) => {
        let { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }
    const [show,setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    let reset = async () => {
        let path = '/reset-password';
        let resp = await API.anonymousJSONPost(path,account);
        if(resp.ok){
            setShow(true)

        }else{
            let response = await resp.json();
            setMessage(response?.message)
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
                                style={{cursor:'pointer'}}
                                ><p style={{ fontStyle: 'italic', fontSize: '35px', color: 'white' }}><b>AMS Building</b></p></div><br /><br />
                            </div>

                            <div className="form-group" style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                                <div style={{color:'#fff',marginBottom:15}}>Mã xác minh</div>
                               
                                <input type="text"
                                    value={account?.token}
                                    name="token"
                                    onChange={e => handleAccount(e)}
                                    style={{width:'100%'}}
                                    className="form-control"
                                    style={{paddingLeft:8}}
                                />
                            </div>
                            <div className="form-group">
                               
                                <input type="password" className="form-control" placeholder="Password" name="password" required 
                                onChange={e => handleAccount(e)}
                                style={{paddingLeft:8}}
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