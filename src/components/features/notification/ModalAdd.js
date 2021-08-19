import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
import { useForm } from "react-hook-form";
export default function ModalAdd({ show, handleClose, search }) {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    let [message, setMessage] = useState()

    let onSubmit = async data => {
        console.log(data)
        let path = "/admin/notification/add";
        let resp = await API.authorizedJSONPost(path, data);
        if (resp.ok) {
            handleClose()
            search()
        } else {
            let response = await resp.json();
            setMessage(response.message);

        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Modal.Body>

                            <ul className="menu">
                                <li className="menu__item">
                                    <div className="menu__item--error"> {message && message}</div>
                                </li>

                                <li className="menu__item">
                                    <div className="menu__item--title">Tiêu đề:</div>
                                    <div className="menu__item--input">
                                        <input type="text"


                                            {...register("title", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error"> {errors.title && <span style={{ fontSize: 13 }}>Trường này không được bỏ trống</span>}</div>

                                </li>

                                <li className="menu__item">
                                    <div className="menu__item--title">Mô tả:</div>
                                    <div className="menu__item--input">
                                        <textarea
                                            {...register("description", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error">
                                        {errors.description && <span style={{ fontSize: 13 }}>Trường này không được bỏ trống</span>}
                                    </div>
                                </li>
                            </ul>





                            {/* <input type="submit" /> */}

                        </Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="sumbit" >
                            Thêm
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            reset({
                                title: null,
                                description: null
                            })
                            handleClose()
                        }}>
                            Hủy
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}