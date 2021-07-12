import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalSend({ show, handleClose, handleShow }) {

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Gửi thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">
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
                            <div className="menu__item--title">Tầng:</div>
                            <div className="menu__item--input">
                                <select>
                                    <option>Item1</option>
                                    <option>Item2</option>

                                </select>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tháng:</div>
                            <div className="menu__item--input">
                                <select>
                                    <option>Item1</option>
                                    <option>Item2</option>

                                </select>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Năm:</div>
                            <div className="menu__item--input">
                                <select>
                                    <option>Item1</option>
                                    <option>Item2</option>

                                </select>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Mô tả:</div>
                            <div className="menu__item--input">
                                <textarea />
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {

                        handleClose()
                    }}>
                        Gửi 
                    </Button>
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