import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../../lib/API';

export default function ModalUpdate({ show, handleClose, data, search }) {

    let [message, setMessage] = useState();
    const [statusId, setStatusId] = useState();
    let [status, setStatus] = useState();
    useEffect(() => {
        fetchData()
    }, [])
    console.log("aa",status)
    let fetchData = async () => {
        let path = `/manager-service/request-service/list`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setStatus(response);
            let arr = await response?.filter((item) => item.name == data?.status);
            setStatusId(arr[0]?.id)
        }
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
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                
                    <Modal.Header closeButton>
                        <Modal.Title>Cập nhật trạng thái</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>

                        <div className="modal__main">
                            <label>Trạng thái</label>
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
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                    </Modal.Footer>
                
            </Modal>
        </>
    )
}