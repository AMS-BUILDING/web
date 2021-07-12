import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalDetail({ show, handleClose }) {
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết yêu cầu dịch vụ</Modal.Title>
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
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số phòng:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tên dịch vụ:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Mô tả:</div>
                            <div className="menu__item--input">
                                <textarea type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giá:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Trạng thái:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                    </ul>
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