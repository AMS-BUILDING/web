import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
import { Controller, useForm } from "react-hook-form";
import moment from 'moment';

export default function ModalAdd({ show, handleClose, search }) {


    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [gender, setGender] = useState(true)
    const [message, setMessage] = useState()
    const [dob, setDob] = useState(new Date());
    let [positionId, setPositionId] = useState(1);
    let [arrPosition, setArrPosition] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    let submitHandler = async (form) => {
        let path = "/admin/employee/add";
        let objReq = {
            name: form.name,
            gender: gender,
            dob: moment(dob, "YYYY-MM-DD").format("DD/MM/YYYY"),
            phoneNumber: form.phoneNumber,
            email: form.email,
            identifyCard: form.identifyCard,
            currentAddress: form.currentAddress,
            homeTown: form.homeTown,
            position: positionId
        }
        let resp = await API.authorizedJSONPost(path, objReq);
        if (resp.ok) {
            handleClose()
            reset();
            setGender(true)
            setDob(new Date())
            search()
            setMessage(null)
        } else {
            let response = await resp.json();
            setMessage(response.message);
        }
    }


    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setArrPosition(response);
        }

    }
    return (
        <>
            <Modal show={show} onHide={() => {
                handleClose()
                reset();
                setGender(true)
                setDob(new Date())
                search()
                setMessage(null)

            }} animation={false} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Thêm nhân viên</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                    <ul className="menu">
                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <Controller

                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />
                                    )}
                                    rules={{ required: true }}
                                    name="name"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.name && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
                                        <input type="radio" style={{ width: 20 }}
                                            onClick={() => { setGender(true) }}
                                            name="gender"
                                            checked={gender}
                                        /> <span style={{ marginLeft: 5 }}>Nam</span></div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }}
                                        onClick={() => { setGender(false) }}
                                        name="gender"
                                        checked={!gender}
                                    /><span style={{ marginLeft: 5 }}>Nữ</span></div>
                                </div>
                            </div>
                            <div className="menu__item--error"> </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input
                                    className=""
                                    onChange={e => {
                                        setDob(e.target.value)
                                    }}
                                    value={moment(dob).format("YYYY-MM-DD")}
                                    type="date"
                                />
                            </div>
                            <div className="menu__item--error"> </div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="phoneNumber"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.phoneNumber && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="email"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.email && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số CCCD</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="identifyCard"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.identifyCard && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="currentAddress"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.currentAddress && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê quán:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type="text"
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => { onChange(e.target.value) }}
                                            value={value}
                                        />

                                    )}
                                    rules={{ required: true }}
                                    name="homeTown"
                                    defaultValue=""
                                />
                            </div>
                            <div className="menu__item--error"> {errors.homeTown && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <select
                                    value={positionId}
                                    onChange={e => setPositionId(e.target.value)}
                                >
                                    {arrPosition?.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id} >{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="menu__item--error"> {errors.position && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit(submitHandler)}>
                        Thêm
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        reset();
                        setGender(true)
                        setDob(new Date())
                        setMessage(null)
                    }}>
                        Hủy

                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}