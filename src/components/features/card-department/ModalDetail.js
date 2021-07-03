import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalDetail({ show, handleClose }) {
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết thẻ căn hộ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Tên:</div>
                                <div className="menu__item--input">
                                    <input type="text" />
                                </div>
                            </li>

                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
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
                                <div className="menu__item--title">Tên xe:</div>
                                <div className="menu__item--input">
                                    <input type="text" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số thẻ căn hộ:</div>
                                <div className="menu__item--input">
                                    <input type="text" />
                                </div>
                            </li>

                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}