import moment from 'moment';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import API, { BASE_DOWNLOAD_URL } from '../../../lib/API';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import style from './profile.module.css';

export default function ChangeProfile({ data, search }) {
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [dob, setDob] = useState(moment(data?.dob, "DD/MM/YYYY").format("YYYY-MM-DD"));
    const [file, setFile] = useState();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("")
    const handleClose = () => {
        setShow(false)
    }
    let updateProfile = async form => {
        let path = '/tenant/update/profile';
        let formData = new FormData();
        formData.append("name", form?.name);
        formData.append("dob", moment(dob, "YYYY-MM-DD").format("DD/MM/YYYY"));
        formData.append("email", form?.email);
        formData.append("phone", form?.phone);
        formData.append("currentAddress", form?.currentAddress);
        formData.append("homeTown", form?.homeTown);
        formData.append("identifyCard", form?.identifyCard);
        if (file) {
            formData.append("multipartFile", file)
        }
        let resp = await API.authorizedFilePost(path, formData);
        if (resp.ok) {
            setMessage("")
            setShow(true)
            search()
        } else {
            setShow(true)
            let response = await resp.json();
            setMessage(response?.message)
        }
    }
    return (
        <>
            <div className="app-card-body px-4 w-100" style={{ background: '#fff' }}>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Họ và tên</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="name"
                                defaultValue={data?.name}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="item-label"><strong>Ngày tháng năm sinh</strong></div>
                            <input
                                className=""
                                onChange={e => {
                                    setDob(e.target.value)
                                }}
                                value={dob}
                                style={{ border: 'none', width: '100%' }}
                                type="date"
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Email</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="email"
                                defaultValue={data?.email}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Căn cước công dân</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="identifyCard"
                                defaultValue={data?.identifyCard}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Số điện thoại</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="phone"
                                defaultValue={data?.phone}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Địa chỉ hiện tại</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="currentAddress"
                                defaultValue={data?.currentAddress}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Quê quán</strong></div>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        onBlur={onBlur}
                                        className=""
                                        onChange={e => {
                                            onChange(e.target.value)
                                        }}
                                        value={value}
                                        style={{ border: 'none', width: '100%' }}
                                    />
                                )}
                                name="homeTown"
                                defaultValue={data?.homeTown}
                            />
                        </div>
                    </div>
                </div>
                <div className="item border-bottom py-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto" style={{ width: '100%' }}>
                            <div className="item-label"><strong>Ảnh đại diện</strong></div>
                            <div className="form-group">
                                <input type="file"
                                    onChange={e => {
                                        setFile(e.target.files[0])
                                    }}
                                />
                            </div>
                            {file &&
                                <img id="target" src={URL.createObjectURL(file)} alt="" style={{ width: 150, height: 'auto' }} />
                            }
                            {!file &&
                                <img id="target" src={`${BASE_DOWNLOAD_URL}${data?.image}`} alt="" style={{ width: 150, height: 'auto' }} />
                            }
                        </div>
                    </div>
                </div>
                <div onClick={handleSubmit(updateProfile)} className={style.btnSubmit} style={{ marginTop: 20, marginBottom: 20 }}>
                    <div>Xác nhận</div>
                </div>
            </div>

            <ModalUpdate show={show} handleClose={handleClose} message={message} />
        </>
    )
}

function ModalUpdate({ show, handleClose, message }) {

    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {message ? <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                        : <> Bạn đã cập nhật thông tin tài khoản thành công!</>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => { handleClose() }}>
                        Đóng
                    </Button>
                </Modal.Footer>


            </Modal>
        </>
    )
}