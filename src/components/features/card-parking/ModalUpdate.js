import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
export default function ModalUpdate({ show, handleClose, data, search }) {
    const [status, setStatus] = useState();
    const [statusId, setStatusId] = useState();
    let [message, setMessage] = useState();
    useEffect(() => {
        fetchData()
    }, [])
    let onSubmit = async () => {
        let path = `/manager-service/vehicle-card/update/${data?.id}?statusId=${statusId}`;
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
    let fetchData = async () => {
        let path = `/manager-service/vehicle-card/list`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setStatus(response);
            let arr = await response?.filter((item) => item.statusName == data?.status);
            setStatusId(arr[0]?.id)
        }
    }
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật trạng thái làm thẻ xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Trạng thái:</div>
                                <div className="menu__item--input">
                                    <select
                                        value={statusId}
                                        onChange={e => setStatusId(e.target.value)}
                                    >
                                        <option>---</option>
                                        {status?.map((item, index) => {
                                            return (
                                                <option key={index} value={item?.id}>{item?.statusName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </li>


                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => onSubmit()}>
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