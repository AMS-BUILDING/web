import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import SubItem from './SubItem';
export default function ModalUpdate({ show, handleClose }) {
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa căn hộ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal__main">
                        <div className="modal__main--top">
                            <div className="title">
                                Tên căn hộ:
                            </div>
                            <div className="input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="modal__main--content">
                            <div className="title">
                                Thành viên:
                            </div>

                            <table>
                                <tr>

                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Thẻ</th>
                                    <th>Quản lý</th>
                                </tr>
                                <SubItem />
                                <SubItem />
                                <SubItem />

                            </table>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Xác nhận
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}