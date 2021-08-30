import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

import React from 'react';

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