import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function ModalMessage({ message, showMessage, handleCloseMessage,search }) {


    return <>
        <Modal show={showMessage} onHide={handleCloseMessage} animation={false}
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    search()
                    handleCloseMessage()
                }}>
                    Đóng
                </Button>
                {/* <Button variant="primary" onClick={handleCloseMessage}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>
    </>
}