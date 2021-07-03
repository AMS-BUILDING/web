import React, { useState } from 'react';
import ModalSend from './ModalSend';
import Service from './Service';
import SignUpService from './SignUpService';
export default function FeeDepartment() {
    const [isSign, setIsSign] = useState(false)
    console.log(isSign);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Phí căn hộ</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Phí căn hộ</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="send">
                <button onClick={handleShow}>
                    Gửi thông báo
                </button>
            </div>
            <ModalSend
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
            <div style={{ paddingLeft: '30px' }}>
                <button onClick={() => setIsSign(false)} style={{
                    border: '1px solid #333', color: '#333', backgroundColor: (!isSign ? '#5cb377' : 'transparent'),
                    cursor: 'pointer', padding: 10, borderRadius: 5, fontFamily: 'Roboto'
                }}>Dịch vụ đặt chỗ</button>
                <button onClick={() => setIsSign(true)}
                    style={{
                        border: '1px solid #333', color: '#333', backgroundColor: (isSign ? '#5cb377' : 'transparent'),
                        cursor: 'pointer', padding: 10, borderRadius: 5, fontFamily: 'Roboto'
                    }}
                >Đăng ký dịch vụ</button>
            </div>
            <div className="main__table">
                <br />
                {!isSign
                    ?
                    <>
                        <Service />
                    </>
                    :
                    <>
                        <SignUpService />
                    </>
                }
            </div>
        </>
    )
}