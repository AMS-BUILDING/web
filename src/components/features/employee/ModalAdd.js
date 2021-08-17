import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
import { useForm } from "react-hook-form";

export default function ModalAdd({ show, handleClose, search }) {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    let [message, setMessage] = useState()

    useEffect(() => {
        fetchData()
    }, [])
    let onSubmit = async (data) => {
        let path = "/admin/employee/add";
        let resp = await API.authorizedJSONPost(path, data);
        console.log(data)
        if (resp.ok) {
            handleClose()
            reset({
                name: null,
                gender: null,
                dob: null,
                phoneNumber: null,
                email: null,
                currentAddress: null,
                homeTown: null,
                position: null
            })
            search()
        } else {
            let response = await resp.json();
            setMessage(response.message);


        }
    }
    let [position, setPosition] = useState();

    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setPosition(response);
        }

    }
    return (
        <>
            <Modal show={show} onHide={() => {
                handleClose()
                setMessage(null)
            }} animation={false} centered>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm nhân viên</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Tên:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        {...register("name", { required: true })}
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

                                                {...register("gender", { required: true })}
                                                value={true}
                                                defaultChecked={true}
                                                defaultValue={true}
                                            /> <span style={{ marginLeft: '5px' }}>Nam</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }}
                                            {...register("gender", { required: true })}
                                            value={false}
                                        /><span style={{ marginLeft: '5px' }}>Nữ</span></div>
                                    </div>
                                </div>
                                <div className="menu__item--error"> {errors.gender && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Ngày sinh:</div>
                                <div className="menu__item--input">
                                    <input type="date"
                                        name="dob"
                                        {...register("dob", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.dob && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="phoneNumber"
                                        {...register("phoneNumber", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.phoneNumber && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Email:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="email"
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.email && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số CCCD</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="identifyCard"
                                        {...register("identifyCard", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.identifyCard && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Địa chỉ hiện tại:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="currentAddress"
                                        {...register("currentAddress", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.currentAddress && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Quê quán:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="homeTown"
                                        {...register("homeTown", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.homeTown && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Vị trí:</div>
                                <div className="menu__item--input">
                                    <select {...register("position", { required: true })}>
                                        {position?.map((item, index) => {
                                            return (
                                                <option key={index} value={item?.id}>{item?.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="menu__item--error"> {errors.position && <span style={{ fontSize: 13 }}>Trường này không được để trống</span>}</div>

                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="sumbit">
                            Thêm
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            reset({
                                name: null,
                                gender: null,
                                dob: null,
                                phoneNumber: null,
                                email: null,
                                currentAddress: null,
                                homeTown: null,
                                position: null
                            })
                            setMessage(null)
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