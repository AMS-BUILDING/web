import React, { useState } from 'react';
import ModalSend from './ModalSend';
import Service from './Service';
import SignUpService from './SignUpService';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import Total from './Total';
export default function FeeDepartment() {
    const [isSign, setIsSign] = useState("service")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [date, setDate] = useState(moment(new Date()).format("MM/YYYY"));

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
            </div>

            <div className="send">
                <div className="input_datetime">
                    <Datetime dateFormat="MM/YYYY" timeFormat={false}
                        value={date}
                        onChange={val => setDate(val)}
                    />
                </div>
                <button onClick={handleShow}>
                    Tìm kiếm
                </button>
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
                <button onClick={() => setIsSign("service")} style={{
                    border: '1px solid #333', color: '#333', backgroundColor: (isSign == "service" ? '#5cb377' : 'transparent'),
                    cursor: 'pointer', padding: 10, borderRadius: 5, fontFamily: 'Roboto'
                }}>Dịch vụ đặt chỗ</button>
                <button onClick={() => setIsSign("request")}
                    style={{
                        border: '1px solid #333', color: '#333', backgroundColor: (isSign == "request" ? '#5cb377' : 'transparent'),
                        cursor: 'pointer', padding: 10, borderRadius: 5, fontFamily: 'Roboto'
                    }}
                >Đăng ký dịch vụ</button>
                <button onClick={() => setIsSign("total")}
                    style={{
                        border: '1px solid #333', color: '#333', backgroundColor: (isSign == "total" ? '#5cb377' : 'transparent'),
                        cursor: 'pointer', padding: 10, borderRadius: 5, fontFamily: 'Roboto'
                    }}
                >Tổng</button>
            </div>
            <div className="main__table">
                <br />
                {isSign == "service" && <Service />}
                {isSign == "request" && <SignUpService />}
                {isSign == "total" && <Total />}

            </div>
        </>
    )
}