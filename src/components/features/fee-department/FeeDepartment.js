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
            <br />
            <div className="main__table">
                <div>
                    <button onClick={() => setIsSign(false)} style={{
                        border: '1px solid #333', color: '#333', backgroundColor: (!isSign ? '#41C7DB' : 'transparent'),
                        cursor: 'pointer'
                    }}>Dịch vụ đặt chỗ</button>
                    <button onClick={() => setIsSign(true)}
                        style={{
                            border: '1px solid #333', color: '#333', backgroundColor: (isSign ? '#41C7DB' : 'transparent'),
                            cursor: 'pointer'
                        }}
                    >Đăng ký dịch vụ</button>
                </div>
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