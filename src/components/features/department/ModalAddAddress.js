import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAdd from './ModalAdd'
export default function ModalAddAddress({ show, handleClose, handleShow }) {
    const [showAdd, setShowAdd] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm cư dân vào căn hộ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">

                        <li className="menu__item">
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <select>
                                    <option>Item1</option>
                                    <option>Item2</option>
                                </select>
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

                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleClose()
                        handleShowAdd()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalAdd
                show={showAdd}
                handleCloseAdd={handleCloseAdd}
                handleShowAdd={handleShowAdd}
                handleShow={handleShow}
            />
        </>
    )
}