import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalUpdateSumbit from './ModalUpdateSumbit';
export default function ModalUpdateDepend({ show, handleClose, handleShow }) {
    const [showSumbit, setShowSumbit] = useState(false);

    const handleCloseSumbit = () => setShowSumbit(false);
    const handleShowSumbit = () => setShowSumbit(true);
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật thông tin người phụ thuộc</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu" style={{ display: 'flex' }}>

                        <div>
                            <li className="menu__item">
                                <div className="menu__item--title">Tên:</div>
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
                                <div className="menu__item--title">Số điện thoại:</div>
                                <div className="menu__item--input">
                                    <input type="text" />
                                </div>
                            </li>
                        </div>

                        <div style={{ marginLeft: 20 }}>
                            <li className="menu__item">
                                <div className="menu__item--title">Giới tính:</div>
                                <div className="menu__item--input">
                                    <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}><input type="radio" name="gender" style={{ width: 20 }} /> <span style={{ marginLeft: '5px' }}>Nam</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }} /><span style={{ marginLeft: '5px' }}>Nữ</span></div>
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
                                <div className="menu__item--title">Quan hệ:</div>
                                <div className="menu__item--input">
                                    <select>
                                        <option>Vợ</option>
                                        <option>Chồng</option>
                                    </select>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <hr />
                    <div style={{ display: 'flex' }}>
                        <button className="sub__btn">+</button>
                        <button className="sub__btn">-</button>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleClose()
                        handleShowSumbit()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        handleShow()
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalUpdateSumbit
                show={showSumbit}
                handleClose={handleClose}
                handleCloseSumbit={handleCloseSumbit}
                handleShow={handleShow}
            />
        </>
    )
}