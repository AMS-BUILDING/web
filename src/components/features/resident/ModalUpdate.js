import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import API from '../../../lib/API';
import { Controller, useForm } from "react-hook-form";

export default function ModalUpdate({ show, handleClose, data, search }) {
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();
    const [resident, setResident] = useState();
    const [message, setMessage] = useState()
    let [position, setPosition] = useState();
    useEffect(() => {
        fetchData()
    }, [])

    let fetchData = async () => {
        let path = `/manager-service/position/search?show=true`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setPosition(response);
            let arr = await response?.filter((item) => item.name == data?.positionId);
            setResident({
                ...resident,
                accountId: data?.accountId,
                name: data?.name,
                gender: data?.gender == "nam" ? true : false,
                dob: data?.dob,
                phone: data?.phone,
                email: data?.email,
                identifyCard: data?.identifyCard,
                positionId: arr[0]?.id,
                currentAddress: data?.currentAddress,
                homeTown: data?.homeTown
            })
        }
    }



    let submitHandler = async form => {
        let objForm = {
            accountId: data?.accountId,
            name: form?.name,
            gender: form?.gender,
            dob: form?.dob,
            phone: form?.phone,
            email: form?.email,
            identifyCard: form?.identifyCard
        }
        console.log(objForm)
        let path = `/admin/resident/update`;
        let resp = await API.authorizedJSONPost(path, objForm);
        if (resp.ok) {
            handleClose()
            search()
        } else {
            let response = await resp.json();
            setMessage(response.message)
            console.log(response)
        }
    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setMessage(null)
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật thông tin cư dân</Modal.Title>
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
                                                setResident({
                                                    ...resident,
                                                    name: e.target.value
                                                })
                                            }}
                                            value={resident?.name}
                                        />

                                    )}
                                    name="name"
                                    defaultValue={resident?.name}
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
                                                        setResident({
                                                            ...resident,
                                                            gender: true
                                                        })
                                                    }}
                                                    name="gender"
                                                    defaultChecked={resident?.gender}
                                                /> Nam</div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                                value={false}
                                                onClick={() => {
                                                    onChange(false)
                                                    setResident({
                                                        ...resident,
                                                        gender: false
                                                    })
                                                }}
                                                defaultChecked={!resident?.gender}
                                            />Nữ</div>
                                        </div>

                                    )}
                                    name="gender"
                                    defaultValue={resident?.gender}
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
                                                setResident({
                                                    ...resident,
                                                    dob: e.target.value
                                                })
                                            }}
                                            value={resident?.dob}
                                        />

                                    )}
                                    name="dob"
                                    defaultValue={resident?.dob}
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
                                                setResident({
                                                    ...resident,
                                                    phone: e.target.value
                                                })
                                            }}
                                            value={resident?.phone}
                                        />

                                    )}
                                    name="phone"
                                    defaultValue={resident?.phone}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setResident({
                                                    ...resident,
                                                    email: e.target.value
                                                })
                                            }}
                                            value={resident?.email}
                                        />

                                    )}
                                    name="email"
                                    defaultValue={resident?.email}
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
                                                setResident({
                                                    ...resident,
                                                    identifyCard: e.target.value
                                                })
                                            }}
                                            value={resident?.identifyCard}
                                        />

                                    )}
                                    name="identifyCard"
                                    defaultValue={resident?.identifyCard}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            onBlur={onBlur}
                                            className=""
                                            onChange={e => {
                                                onChange(e.target.value)
                                                setResident({
                                                    ...resident,
                                                    currentAddress: e.target.value
                                                })
                                            }}
                                            value={resident?.currentAddress}
                                        />

                                    )}
                                    name="currentAddress"
                                    defaultValue={resident?.currentAddress}
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
                                                setResident({
                                                    ...resident,
                                                    homeTown: e.target.value
                                                })
                                            }}
                                            value={resident?.homeTown}
                                        />

                                    )}
                                    name="homeTown"
                                    defaultValue={resident?.homeTown}
                                />
                            </div>
                        </li>

                        {data?.relationShip !== "Chủ hộ" &&
                            <li className="menu__item">
                                <div className="menu__item--title">Quan hệ với chủ hộ:</div>
                                <div className="menu__item--input">
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <select
                                                value={resident?.positionId}
                                                onChange={(e) => {
                                                    onChange(e.target.value)
                                                    setResident({ ...resident, positionId: e.target.value })
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
                                        defaultValue={resident?.positionId}
                                    />
                                </div>


                                <div className="menu__item--input">
                                    {/* <input type="text"
                                    {...register("name")}

                                /> */}
                                </div>
                                {/* <div className="menu__item--error"> {errors.name && <span>This field is required</span>}</div> */}
                            </li>
                        }

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