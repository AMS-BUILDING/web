import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAddDepend from './ModalAddDepend';
export default function ModalAdd({ show, handleCloseAdd, handleShowAdd, handleShow }) {
    const [showDepend, setShowDepend] = useState(false);

    const handleCloseDepend = () => setShowDepend(false);
    const handleShowDepend = () => setShowDepend(true);
    return (
        <>

            <Modal show={show} onHide={handleCloseAdd} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm thông tin chủ hộ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">

                        <li className="menu__item">
                            <div className="menu__item--title">Tên chủ hộ:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số phòng:</div>
                            <div className="menu__item--input">
                                <select>
                                    <option>Item1</option>
                                    <option>Item1</option>
                                </select>
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
                    <Button variant="primary" onClick={() => {
                        handleCloseAdd()
                        handleShowDepend()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleShow()
                        handleCloseAdd()
                    }}>
                        Quay lại
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalAddDepend
                showDepend={showDepend}
                handleCloseDepend={handleCloseDepend}
                handleShowDepend={handleShowDepend}
                handleShowAdd={handleShowAdd}
            />
        </>
    )
}