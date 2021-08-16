import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAddDepend from './ModalAddDepend';
import { useForm } from "react-hook-form";
import Search from './Search';
import API from '../../../lib/API';
import { generatePath } from 'react-router-dom';

export default function ModalAddCard({ show, handleCloseAdd, search, handleAdd }) {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    let [message, setMessage] = useState()

    let onSubmit = async data => {

        let path = `/admin/resident-card/add?email=${data.email}`;
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            handleCloseAdd()
            handleAdd()
            search()
            reset({
                email: null
            })
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }
    return (
        <>

            <Modal show={show} onHide={handleCloseAdd} animation={false} centered>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm thông tin chủ hộ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--error"> {message && message}</div>
                            </li>

                            <li className="menu__item">
                                <div className="menu__item--title">Email:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.email && <span>This field is required</span>}</div>
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="sumbit" >
                            Tiếp
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            handleCloseAdd()
                        }}>
                            Quay lại
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}