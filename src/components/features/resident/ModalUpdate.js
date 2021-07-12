import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalUpdate({ show, handleClose, handleShow }) {

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật thông tin cư dân</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">

                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }} /> Nam</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }} />Nữ</div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input type="date" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số CCCD</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="toa" style={{ width: 50 }} /> A1</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="toa" style={{ width: 50 }} />A2</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="toa" style={{ width: 50 }} />A3</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="toa" style={{ width: 50 }} />A4</div>

                                </div>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số phòng:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê quán:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {

                        handleClose()
                    }}>
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}