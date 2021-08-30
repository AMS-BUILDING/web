import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import SubItem from './SubItem';
import ModalUpdateDepend from './ModalUpdateDepend';
export default function ModalUpdate({ show, handleClose, handleShow }) {
    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật thông tin chủ hộ</Modal.Title>
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
                    <Button variant="success" onClick={() => {
                        handleShowUpdate()
                        handleClose()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalUpdateDepend
                show={showUpdate}
                handleClose={handleCloseUpdate}
                handleShow={handleShow}
            />
        </>
    )
}