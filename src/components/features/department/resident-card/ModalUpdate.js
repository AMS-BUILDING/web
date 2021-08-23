import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../../lib/API';
import { status_request } from '../../../../utils/status';

export default function ModalUpdate({ show, handleClose, data, search }) {

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
        let arr = await status_request?.filter((item) => item.name == data?.status);
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
        console.log(data);
        let path = `/admin/resident-card/update/${data?.residentId}?statusId=${statusId}`;
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            search()
            handleClose()
        } else {
            let response = await resp.json();
            setMessage(response)
            console.log(response.message)
        }
    }
    console.log("s", status)
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>

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
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}