import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';
import { status_request } from '../../../utils/status';

export default function ModalUpdate({ show, handleClose, rqservice, search }) {

    let [message, setMessage] = useState();
    const [statusId, setStatusId] = useState();
    let [status, setStatus] = useState();
    useEffect(() => {
        fetchData()
     
    }, [])
    useEffect(() => {
        fetchStatus()
    }, [statusId])
  
    console.log(statusId)
    let fetchData = async () => {
        let arr = await status_request?.filter((item) => item.name == rqservice?.status);
        setStatusId(arr[0]?.id);
    }
    let fetchStatus = () => {
        let resp = [];
        for (let i = statusId - 1; i < status_request?.length; i++) {
            resp.push(status_request[i])
        }
        setStatus(resp)
    }
    let onSubmit = async data => {
        let path = `/landlord/request-service/update/${rqservice?.id}?statusId=${statusId}`;
        console.log(path)
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            search()
            handleClose()
            setMessage(null)
        } else {
            let response = await resp.json();
            setMessage(response.message)
        }
    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setMessage(null)
            }} animation={false} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật trạng thái</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                    <div className="modal__main">
                        <select
                            value={statusId}
                            onChange={e => setStatusId(e.target.value)}
                        >
                            {status?.map((item, index) => {
                                return (
                                    <option key={index} value={item?.id}>{item?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => onSubmit()}>
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        setMessage(null)
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}