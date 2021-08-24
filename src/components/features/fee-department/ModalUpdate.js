import { Button } from 'react-bootstrap';
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import API from '../../../lib/API';

export default function ModalUpdate({ show, handleClose, search, id }) {
    const [message, setMessgae] = useState("")
 
    let updateStatus = async () => {
      
            let path = `/admin/fee-apartment/update/${id}?statusId=2`;
            let resp = await API.authorizedJSONPost(path);
            if (resp.ok) {
                handleClose()
                search()
                setMessgae("")
            } else {
                let response = await resp.json();
                setMessgae(response?.message)
            }
     
    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setMessgae("")

            }} animation={false} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật trạng thái</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>

                    <div className="modal__main">
                        <div>Đã thanh toán</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => updateStatus()} >
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        setMessgae("")
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}