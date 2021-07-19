import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function ModalDelete({showDelete,handleCloseDeletem ,deleteItem,search }) {


    return <>
        <Modal show={showDelete} onHide={handleCloseDeletem} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Bạn có muốn xóa?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleCloseDeletem()
                }}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => {
                    handleCloseDeletem()
                    deleteItem()
                }}>
                   Tiếp tục
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}