import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import API from '../../../lib/API';
import { Controller, useForm } from "react-hook-form";

export default function ModalUpdate({ show, handleClose, data, search }) {
    let [position, setPosition] = useState();
    let [arrPosition, setArrPosition] = useState([])
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [gender, setGender] = useState();
    const [message, setMessage] = useState()
    const [dob, setDob] = useState();
    useEffect(() => {
        fetchData()
    }, [data])
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setArrPosition(response);
            let id = await response?.filter((item) => item.name == data.positionName)?.[0]?.id;
            setDob(moment(data.dob, "DD/MM/YYYY").format("YYYY-MM-DD"))
            setGender(data.gender)
            setPosition(id)
        }
    }

    let submitHandler = async form => {
        let path = `/admin/employee/update/${data?.id}`;
        let objReq = {
            name: form.name,
            gender: gender,
            dob: moment(dob, "YYYY-MM-DD").format("DD/MM/YYYY"),
            phoneNumber: form.phoneNumber,
            identifyCard: form.identifyCard,
            currentAddress: form.currentAddress,
            homeTown: form.homeTown,
            position: position
        }
        let resp = await API.authorizedJSONPost(path, objReq);
        if (resp.ok) {
            handleClose()
            search()
        } else {
            let response = await resp.json();
            setMessage(response.message)
        }
    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setMessage(null)
                reset()
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật nhân viên</Modal.Title>
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
                                    name="name"
                                    defaultValue={data?.name}
                                />
                            </div>
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
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input
                                    className=""
                                    onChange={e => {
                                        setDob(e.target.value)
                                    }}
                                    value={dob}
                                    type="date"
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số điện thoại:</div>
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
                                    name="phoneNumber"
                                    defaultValue={data?.phone}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số chứng minh thư:</div>
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
                                    name="identifyCard"
                                    defaultValue={data?.identifyCard}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Nơi ở hiện tại:</div>
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
                                    name="currentAddress"
                                    defaultValue={data?.currentAddress}
                                />
                            </div>
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
                                    name="homeTown"
                                    defaultValue={data?.homeTown}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <select
                                    value={position}
                                    onChange={e => setPosition(e.target.value)}
                                >
                                    {arrPosition?.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id} >{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit(submitHandler)}>
                        Xác nhận
                    </Button>
                    <Button variant="secondary"
                        onClick={() => {
                            handleClose()
                            setMessage(null)
                            reset()
                        }}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}