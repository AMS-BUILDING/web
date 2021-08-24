import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';

export default function ModalAdd({ show, handleClose, handleShow, search, apartmentId }) {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    let [position, setPosition] = useState();
    const [message, setMessage] = useState();
    useEffect(() => {
        fetchData()
    }, [])
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=true`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setPosition(response);
        }

    }


    let onSubmit = async (data) => {
        let path = '/admin/a/apartment/add';
        let objData = {
            apartmentId: apartmentId,
            request: data
        };
        console.log("objData", objData)
        let resp = await API.authorizedJSONPost(path, objData);
        if (resp.ok) {
            handleClose()
            search()
            setMessage(null)
            reset({
                name: null,
                identifyCard: null,
                phone: null,
                email: null,
                gender: true,
                dob: null,
                currentAddress: null,
                homeTown: null
            })
            console.log("ok")
        } else {
            let response = await resp.json();
            setMessage(response?.message)

        }

    }
    return (
        <>

            <Modal show={show}
                onHide={() => {
                    handleClose()
                    setMessage(null)
                }}
                animation={false} centered>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm người phụ thuộc</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>
                        <div>
                            <ul className="menu">
                                <li className="menu__item">
                                    <div className="menu__item--title">Tên:</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error"> {errors.name && <span>Trường này không được để trống</span>}</div>
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
                                                /> <span style={{ marginLeft: 5 }}>Nam</span></div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }}
                                                {...register("gender", { required: true })}
                                                value={false}
                                            /><span style={{ marginLeft: 5 }}>Nữ</span></div>
                                        </div>
                                    </div>
                                    <div className="menu__item--error"> {errors.gender && <span>Trường này không được để trống</span>}</div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Ngày sinh:</div>
                                    <div className="menu__item--input">
                                        <input type="date"
                                            name="dob"
                                            {...register("dob", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error"> {errors.dob && <span>Trường này không được để trống</span>}</div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Số ĐT:</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            name="phone"
                                            {...register("phone")}
                                        />
                                    </div>
                                    <div className="menu__item--error"></div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Địa chỉ hiện tại:</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            name="currentAddress"
                                            {...register("currentAddress", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error"> {errors.currentAdress && <span>Trường này không được để trống</span>}</div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Quê Quán:</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            name="homeTown"
                                            {...register("homeTown", { required: true })}
                                        />
                                    </div>
                                    <div className="menu__item--error"> {errors.homeTown && <span>Trường này không được để trống</span>}</div>
                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Email:</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            name="email"
                                            {...register("email")}
                                        />
                                    </div>
                                    <div className="menu__item--error"> </div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Số CCCD</div>
                                    <div className="menu__item--input">
                                        <input type="text"
                                            name="identifyCard"
                                            {...register("identifyCard")}
                                        />
                                    </div>
                                    <div className="menu__item--error"></div>

                                </li>
                                <li className="menu__item">
                                    <div className="menu__item--title">Quan hệ chủ hộ:</div>
                                    <div className="menu__item--input">
                                        <select {...register("positionId", { required: true })}>
                                            {position?.map((item, index) => {
                                                return (
                                                    <option key={index} value={item?.id}>{item?.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="menu__item--error"> {errors.positionId && <span>Trường này không được để trống</span>}</div>

                                </li>



                            </ul>
                            <br />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">
                            Thêm
                        </Button>
                        <Button variant="secondary" onClick={() => {

                            handleClose()
                            setMessage(null)
                        }}>
                            Quay lại

                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}