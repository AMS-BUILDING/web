import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import moment from 'moment';
export default function ModalDetail({ show, handleClose, handleShow, data }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết thông tin cư dân</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">

                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    value={data?.name}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}><input type="radio" name="gender" style={{ width: 20 }}
                                        checked={data?.gender}
                                    /> <span style={{ marginLeft: 5 }}>Nam</span></div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }}
                                        checked={!data?.gender}
                                    /><span style={{ marginLeft: 5 }}>Nữ</span></div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    value={(data?.dob)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    value={data?.phone}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.email} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số CCCD</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.identifyCard} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.blockName} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số phòng:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    value={data?.roomNumber}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.currentAddress} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê quán:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.homeTown} />
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}