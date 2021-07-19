import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';

export default function ModalAdd({ show, handleClose, handleMessage, handleShowMessage }) {

    // useEffect(() => {
    //     handleClose()
    // }, [showMessage])

    let [data, setData] = useState();
    let addNotification = async () => {
        let path = "/admin/notification/add";
        let resp = await API.authorizedJSONPost(path, data);
        if (resp.ok) {
            handleShowMessage(true)
            handleMessage("Thêm thành công!")
            handleClose()

        } else {
            let response = await resp.json();
            handleShowMessage(true)
            handleMessage(response.message);
            handleClose()

        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Tiêu đề:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        onChange={e => setData({
                                            ...data,
                                            title: e.target.value
                                        })}
                                    />
                                </div>
                            </li>

                            <li className="menu__item">
                                <div className="menu__item--title">Mô tả:</div>
                                <div className="menu__item--input">
                                    <textarea
                                        onChange={e => setData({
                                            ...data,
                                            description: e.target.value
                                        })}
                                    />
                                </div>
                            </li>
                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        addNotification()
                    }}>
                        Thêm
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}