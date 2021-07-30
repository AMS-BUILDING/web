import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAddDepend from './ModalAddDepend';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';

export default function ModalAdd({ show, handleCloseAdd, handleShowAdd, handleShow, blockId, floorId ,search}) {
    const [showDepend, setShowDepend] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    let [ownPerson, setOwnPerson] = useState();
    const handleCloseDepend = () => setShowDepend(false);
    const handleShowDepend = () => setShowDepend(true);
    const [apartment, setApartment] = useState([]);
    const [message, setMessage] = useState()

    useEffect(() => {
        searchApartment()
    }, [blockId, floorId])
    let searchApartment = async () => {
        let path = `/admin/room-number/search?floorId=${floorId}&blockId=${blockId}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setApartment(response)
        }
    }
    const onSubmit = async data => {
        let path = `/admin/validate/owner`;
        let resp = await API.authorizedJSONPost(path, data);
        console.log("data", data)
        if (resp.ok) {
            handleCloseAdd()
            setOwnPerson(data)
            handleShowDepend()
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }

    return (
        <>

            <Modal show={show} onHide={() => {
                handleShow()
                handleCloseAdd()
            }} animation={false} centered>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm thông tin chủ hộ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>

                        <ul className="menu">

                            <li className="menu__item">
                                <div className="menu__item--title">Tên chủ hộ:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        {...register("name", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.name && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số phòng:</div>
                                <div className="menu__item--input">
                                    <select {...register("apartmentId", { required: true })}
                                    defaultValue={apartment[0]?.id}
                                    >

                                        {apartment?.map((item, index) => {
                                            return (
                                                <option value={item?.apartmentId} key={index}>{item?.roomName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="menu__item--error"> {errors.apartmentId && <span>This field is required</span>}</div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Giới tính:</div>
                                <div className="menu__item--input">
                                    <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="radio" style={{ width: 50 }}

                                                {...register("gender", { required: true })}
                                                defaultValue={true}
                                                defaultChecked={true}
                                                value={true}
                                            /> Nam</div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                            {...register("gender", { required: true })}
                                            value={false}
                                        />Nữ</div>
                                    </div>
                                </div>
                                <div className="menu__item--error"> {errors.gender && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Ngày sinh:</div>
                                <div className="menu__item--input">
                                    <input type="date"
                                        name="dob"
                                        {...register("dob", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.dob && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="phone"
                                        {...register("phone", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.phone && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Email:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="email"
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.email && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số CCCD</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="identifyCard"
                                        {...register("identifyCard", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.identifyCard && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Địa chỉ hiện tại:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="currentAddress"
                                        {...register("currentAddress", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.currentAddress && <span>This field is required</span>}</div>

                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Quê quán:</div>
                                <div className="menu__item--input">
                                    <input type="text"
                                        name="homeTown"
                                        {...register("homeTown", { required: true })}
                                    />
                                </div>
                                <div className="menu__item--error"> {errors.homeTown && <span>This field is required</span>}</div>

                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="sumbit">
                            Tiếp
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            handleShow()
                            handleCloseAdd()
                        }}>
                            Quay lại
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <ModalAddDepend
                showDepend={showDepend}
                handleCloseDepend={handleCloseDepend}
                handleShowDepend={handleShowDepend}
                handleShowAdd={handleShowAdd}
                ownPerson={ownPerson}
                apartmentId={ownPerson?.apartmentId}
                blockId={blockId}
                floorId={floorId}
                search={search}
            />
        </>
    )
}