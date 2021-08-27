import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../../lib/API';
import { status_card } from '../../../../utils/status';

export default function ModalUpdate({ show, handleClose, data, search,id }) {

    let [message, setMessage] = useState();
    const [statusId, setStatusId] = useState();
    useEffect(() => {
        fetchData()
    }, [data])
   
   
    let fetchData = async () => {
        let id = await status_card?.filter((item) => item.name == data?.status)?.[0]?.id;
        setStatusId(id);
    }
   
    let onSubmit = async data => {
        console.log(data);
        let path = `/admin/resident-card/update/${id}?statusId=${statusId}`;
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            search()
            handleClose()
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }
  
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
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

                            >
                                {status_card?.map((item, index) => {
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
                            setStatusId()
                        }}>
                            Hủy
                        </Button>
                    </Modal.Footer>
                
            </Modal>
        </>
    )
}