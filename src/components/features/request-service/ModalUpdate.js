import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function ModalUpdate({ show, handleClose }) {
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật trạng thái</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal__main">
                        <div className="modal__main--top">
                            <div className="title">
                                Trạng thái:
                            </div>
                            <div className="input">
                                <select>
                                    <option>Hoàn thành</option>
                                    <option>Chưa hoàn thành</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}