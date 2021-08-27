import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';
import style from './profile.module.css';

export default function ChangePassword({ show, handleClose, handleShow, search }) {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState();

    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => {
        setShowSuccess(false)
    }
    let onSubmit = async (data) => {
        if (data?.newPassword !== data?.overPassword) {
            setMessage("Mật khẩu bạn nhập lại chưa đúng!")
            setShowSuccess(true)
        } else {
            let path = '/tenant/change-password';
            let resp = await API.authorizedJSONPost(path, {
                oldPassword: data?.password,
                newPassword: data?.newPassword
            });
            if (resp.ok) {
                reset()
                setMessage("")
                handleClose()
                search()
                setShowSuccess(true)
            } else {
                setShowSuccess(true)
                let response = await resp.json();
                setMessage(response?.message)
            }
        }

    }
    return (
        <>
            <ModalSuccess showSuccess={showSuccess} handleCloseSuccess={handleCloseSuccess} message={message} />

            <div className="app-card-body px-4 w-100" style={{ background: '#fff', paddingTop: 10 }}>
                <div className="item border-bottom ">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Mật khẩu cũ</strong></div>
                            <div className="menu__item--input">
                                <input type="password"
                                    {...register("password", { required: true })}
                                    style={{ border: 'none', width: '100%' }}
                                />
                            </div>
                            <div className="menu__item--error"> {errors.password && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>
                        </div>
                    </div>
                </div>
                <div className="item border-bottom ">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Mật khẩu mới</strong></div>
                            <div className="menu__item--input">
                                <input type="password"
                                    {...register("newPassword", { required: true })}
                                    style={{ border: 'none', width: '100%' }}
                                />
                            </div>
                            <div className="menu__item--error"> {errors.newPassword && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>
                        </div>

                    </div>
                </div>
                <div className="item border-bottom ">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="item-label"><strong>Nhập lại mật khẩu mới</strong></div>
                            <div className="menu__item--input">
                                <input type="password"
                                    {...register("overPassword", { required: true })}
                                    style={{ border: 'none', width: '100%' }}
                                />
                            </div>
                            <div className="menu__item--error"> {errors.overPassword && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>
                        </div>
                    </div>
                </div>


            </div>
            <div onClick={handleSubmit(onSubmit)} className={style.btnSubmit} style={{ marginTop: 20, marginBottom: 20 }}>
                <div>Xác nhận</div>
            </div>
        </>
    )
}

function ModalSuccess({ handleCloseSuccess, showSuccess, message }) {
    return <>
        <Modal show={showSuccess} onHide={handleCloseSuccess} animation={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message ? <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div> : <>Bạn đã thay đổi mật khẩu thành công!</>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleCloseSuccess()
                }}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}