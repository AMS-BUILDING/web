import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';
import { status_request } from '../../../utils/status';

export default function ModalUpdate({ show, handleClose, id, statusName, search }) {

    let [message, setMessage] = useState();
    const [statusId, setStatusId] = useState();
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [id])

    let fetchData = async () => {
        let idStatus = await status_request?.filter((item) => item.name == statusName)?.[0]?.id;
        setStatusId(idStatus);
    }

    let onSubmit = async () => {
        let path = `/landlord/request-service/update/${id}?statusId=${statusId}`;
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
                setStatusId()
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
                            style={{ width: '100%' }}
                        >
                            {status_request?.map((item, index) => {
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
                        setStatusId()
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}