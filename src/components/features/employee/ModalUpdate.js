import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import API from '../../../lib/API';
import { Controller, useForm } from "react-hook-form";

export default function ModalUpdate({ show, handleClose, data, search }) {
    let [position, setPosition] = useState();
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [employee, setEmployee] = useState();
    const [message, setMessage] = useState()
    useEffect(() => {
        fetchData()

    }, [])
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setPosition(response);
            let arr = await response?.filter((item) => item.name == data?.positionName);
            setEmployee({
                ...employee,
                position: arr[0].id,
                name: data?.name,
                gender: data?.gender == "nam" ? true : false,
                dob: data?.dob,
                phoneNumber: data?.phone,
                email: data?.email,
                identifyCard: data?.identifyCard,
                currentAddress: data?.currentAddress,
                homeTown: data?.homeTown
            })
        }
    }

    let submitHandler = async form => {
        console.log(form)
        let path = `/admin/employee/update/${data?.id}`;
        let resp = await API.authorizedJSONPost(path, form);
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
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    name: e.target.value
                                                })
                                            }}
                                            value={employee?.name}
                                        />

                                    )}
                                    name="name"
                                    defaultValue={employee?.name}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <input type="radio" style={{ width: 50 }}
                                                    value={true}
                                                    onClick={() => {
                                                        onChange(true)
                                                        setEmployee({
                                                            ...employee,
                                                            gender: true
                                                        })
                                                    }}
                                                    name="gender"
                                                    defaultChecked={employee?.gender}
                                                /> Nam</div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                                value={false}
                                                onClick={() => {
                                                    onChange(false)
                                                    setEmployee({
                                                        ...employee,
                                                        gender: false
                                                    })
                                                }}
                                                defaultChecked={!employee?.gender}
                                            />Nữ</div>
                                        </div>

                                    )}
                                    name="gender"
                                    defaultValue={employee?.gender}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            type="date"
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    dob: e.target.value
                                                })
                                            }}
                                            value={employee?.dob}
                                        />

                                    )}
                                    name="dob"
                                    defaultValue={employee?.dob}
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
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    phoneNumber: e.target.value
                                                })
                                            }}
                                            value={employee?.phoneNumber}
                                        />

                                    )}
                                    name="phoneNumber"
                                    defaultValue={employee?.phoneNumber}
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
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    identifyCard: e.target.value
                                                })
                                            }}
                                            value={employee?.identifyCard}
                                        />

                                    )}
                                    name="identifyCard"
                                    defaultValue={employee?.identifyCard}
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
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    currentAddress: e.target.value
                                                })
                                            }}
                                            value={employee?.currentAddress}
                                        />

                                    )}
                                    name="currentAddress"
                                    defaultValue={employee?.currentAddress}
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
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setEmployee({
                                                    ...employee,
                                                    homeTown: e.target.value
                                                })
                                            }}
                                            value={employee?.homeTown}
                                        />

                                    )}
                                    name="homeTown"
                                    defaultValue={employee?.homeTown}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <select
                                            value={employee?.position}
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                                setEmployee({ ...employee, position: e.target.value })
                                            }}
                                        >
                                            {position?.map((item, index) => {
                                                return (
                                                    <option value={item?.id}>{item?.name}</option>
                                                )
                                            })}
                                        </select>
                                    )}
                                    name="position"
                                    defaultValue={employee?.position}
                                />
                            </div>


                            <div className="menu__item--input">
                                {/* <input type="text"
                                        {...register("name")}

                                    /> */}
                            </div>
                            {/* <div className="menu__item--error"> {errors.name && <span>This field is required</span>}</div> */}
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