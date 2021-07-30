import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function ModalDelete({showDelete,handleCloseDelete ,handleAccountId,deleteItem,search }) {


    return <>
        <Modal show={showDelete} onHide={handleCloseDelete} animation={false}
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Bạn có muốn xóa?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleCloseDelete()
                }}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => {
                    handleCloseDelete()
                    deleteItem()
                    handleAccountId(null)
                    search()
                }}>
                   Tiếp tục
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}