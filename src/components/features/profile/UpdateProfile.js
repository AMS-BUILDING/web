import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import API, { BASE_DOWNLOAD_URL } from '../../../lib/API';
import { Controller, useForm } from "react-hook-form";

export default function UpdateProfile({ show, handleClose, search }) {
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [message, setMessage] = useState()
    const [data, setData] = useState();
    const [filePath, setFilePath] = useState();
    const [file, setFile] = useState();
    const [date, setDate] = useState();
    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        fetchData()
    }, [show]);
  
    const fetchData = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response);
        }
    }
    let submitHandler = async form => {
        if (filePath) {
            console.log("x", moment(date).format("DD/MM/YYYY"))
            console.log("asas", form)
            let path = `/tenant/update/profile`;
            let data = new FormData();
            data.append("name", form?.name);
            date ? data.append("dob", moment(date).format("DD/MM/YYYY")) :  data.append("dob", data?.dob) ;
            data.append("phone", form?.phone);
            data.append("currentAddress", form?.currentAddress);
            data.append("homeTown", form?.homeTown);
            data.append("identifyCard", form?.identifyCard);
            data.append("multipartFile", file)
            let resp = await API.authorizedFilePost(path, data);
            if (resp.ok) {
                search()
                reset()
                handleClose()
            } else {
                let response = await resp.json();
                console.log(response)
                setMessage(response?.message)
            }
        } else {
            console.log("asas", form)
            let path = `/tenant/update/profile`;
            let data = new FormData();
            data.append("name", form?.name);
            date ? data.append("dob", moment(date).format("DD/MM/YYYY")) :  data.append("dob", data?.dob) ;
            data.append("phone", form?.phone);
            data.append("currentAddress", form?.currentAddress);
            data.append("homeTown", form?.homeTown);
            data.append("identifyCard", form?.identifyCard);
            let resp = await API.authorizedFilePost(path, data);
            if (resp.ok) {
                search()
                reset()
                handleClose()
            } else {
                let response = await resp.json();
                console.log(response)
                setMessage(response?.message)
            }
        }

    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setMessage(null)
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập thông tin cá nhân</Modal.Title>
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
                                            onChange={e => {
                                                onChange(e.target.value)
                                            }}
                                            value={value}
                                        />

                                    )}
                                    name="name"
                                    defaultValue={data?.name}
                                />
                            </div>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input
                                    type="date"
                                    onChange={e => {
                                        setDate(e.target.value)
                                    }}
                                    value={date}
                                    defaultValue={data?.dob}
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
                                            onChange={e => {
                                                onChange(e.target.value)
                                            }}
                                            value={value}
                                        />

                                    )}
                                    name="phone"
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
                                            onChange={e => {
                                                onChange(e.target.value)
                                            }}
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
                                            onChange={e => {
                                                onChange(e.target.value)
                                            }}
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
                                            onChange={e => {
                                                onChange(e.target.value)
                                            }}
                                            value={value}
                                        />

                                    )}
                                    name="homeTown"
                                    defaultValue={data?.homeTown}
                                />
                            </div>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item--title">Ảnh:</div>
                            <div className="menu__item--input">
                                <input
                                    type="file"
                                    onChange={e => {
                                        setFile(e.target.files[0])
                                        setFilePath(URL.createObjectURL(e.target.files[0]));
                                    }}

                                />

                            </div>


                            {filePath &&
                                <div>
                                    <img
                                        id="target"
                                        src={filePath}
                                        style={{ width: 300, height: 200, objectFit: "cover" }}
                                        alt=""
                                    />
                                </div>
                            }
                            {!filePath && <img
                                id="target"
                                src={`${BASE_DOWNLOAD_URL}${data?.image}`}
                                style={{ width: 300, height: 200, objectFit: "cover" }}
                                alt=""
                            />}

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
                        }}
                    >
                        Hủy

                    </Button>
                </Modal.Footer>


            </Modal>
        </>
    )
}