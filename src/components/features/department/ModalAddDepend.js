import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAddSumbit from './ModalAddSumbit';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';

export default function ModalAddDepend({ showDepend, handleCloseDepend, handleShowDepend, handleShowAdd, ownPerson, apartmentId, blockId, floorId, search }) {
    const [showSumbit, setShowSumbit] = useState(false);
    let [position, setPosition] = useState([]);

    const handleCloseSumbit = () => setShowSumbit(false);
    const handleShowSumbit = () => setShowSumbit(true);
    let [depend, setDepend] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    let [person, setPerson] = useState([{
        name: null
    }])
    let addEvent = async () => {
        await setPerson([...person,
        { name: null }
        ])


    }
    let minusEvent = () => {
        let arr = [...person];
        arr.pop()
        setPerson(arr)

    }

    let handleDepend = (data) => {
        setDepend([...depend, data])
    }

    let fetchData = async () => {
        let path = `/manager-service/position/search?show=true`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setPosition(response);
        }
    }
    return (
        <>
            <Modal show={showDepend} onHide={() => {
                handleCloseDepend()
                handleShowAdd()
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm thông tin người phụ thuộc</Modal.Title>
                </Modal.Header>
                {person?.map((item, index) => {
                    return (
                        <>
                            <PersonDepend addEvent={addEvent} minusEvent={minusEvent} index={index} length={person?.length}
                                ownPerson={ownPerson} apartmentId={apartmentId}
                                handleDepend={handleDepend}
                                depend={depend}
                                handleCloseDepend={handleCloseDepend}
                                handleShowSumbit={handleShowSumbit}
                                handleCloseDepend={handleCloseDepend}
                                handleShowAdd={handleShowAdd}
                            />
                        </>
                    )
                })}
                {person.length == 0 &&
                    <Modal.Footer>

                        <Button variant="success"
                            onClick={() => {
                                handleCloseDepend()
                                handleShowSumbit()
                            }}
                        >
                            Tiếp
                        </Button>
                        <Button variant="secondary"
                            onClick={() => {
                                handleCloseDepend()
                                handleShowAdd()
                            }}

                        >
                            Quay lại
                        </Button>
                    </Modal.Footer>
                }


            </Modal>
            <ModalAddSumbit
                show={showSumbit}
                handleClose={handleCloseDepend}
                handleCloseSumbit={handleCloseSumbit}
                handleShow={handleShowDepend}
                depend={depend}
                ownPerson={ownPerson}
                apartmentId={apartmentId}
                blockId={blockId}
                floorId={floorId}
                search={search}
            />
        </>
    )
}

function PersonDepend({ addEvent, minusEvent, index, length, ownPerson, apartmentId, handleDepend, depend, handleShowSumbit, handleCloseDepend, handleShowAdd }) {
    let [position, setPosition] = useState();
    const [message, setMessage] = useState();
    let [positionId, setPositionId] = useState(5);
    const [gender, setGender] = useState(true)
   
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
    let onSubmit = async (form) => {
       
        let data = {
            name: form?.name,
            identifyCard: form?.identifyCard,
            phone: form?.phone,
            email: form?.email,
            gender: gender,
            dob: form?.dob,
            positionId: positionId
        }
       
        let path = '/admin/validate/resident';
        let objData = {
            apartmentId: apartmentId,
            residentRequestList: index == 0 ? [data] : [...depend, data],
            ownerRequest: ownPerson
        };
        let resp = await API.authorizedJSONPost(path, objData);
        if (resp.ok) {
            addEvent();
            handleDepend(data)
            setMessage(null)
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }

    let onSubmitButton = async form => {
        let path = '/admin/validate/resident';
        let data = {
            name: form?.name,
            identifyCard: form?.identifyCard,
            phone: form?.phone,
            email: form?.email,
            gender: gender,
            dob: form?.dob,
            positionId: positionId
        }
       
        let objData = {
            apartmentId: apartmentId,
            residentRequestList: index == 0 ? [data] : [...depend, data],
            ownerRequest: ownPerson
        };
        let resp = await API.authorizedJSONPost(path, objData);
        if (resp.ok) {
            setMessage(null)
            handleDepend(data);
            handleCloseDepend()
            handleShowSumbit()
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    return (
        <>
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
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="radio" style={{ width: 50 }}

                                            onClick={() => setGender(true)}
                                            checked={gender}

                                            name={`${index}`}
                                        /> Nam</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                        onClick={() => setGender(false)}
                                        checked={!gender}
                                        name={`${index}`}
                                    />Nữ</div>
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
                                // {...register("currentAddress", { required: true })}
                                />
                            </div>
                            <div className="menu__item--error"> </div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê Quán:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="homeTown"
                                    {...register("homeTown")}
                                />
                            </div>
                            <div className="menu__item--error"> </div>

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
                            <div className="menu__item--error"> </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <select
                                    value={positionId}
                                    onChange={(e) => setPositionId(e.target.value)}

                                >
                                    {position?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.id}>{item?.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="menu__item--error"></div>

                        </li>
                        {length == (index + 1) && <>
                            <div style={{ display: 'flex' }}>
                                <button className="sub__btn"
                                    onClick={handleSubmit(onSubmit)}

                                >+</button>
                                <button className="sub__btn" onClick={() => {
                                    minusEvent()

                                }}>-</button>
                            </div>
                        </>}


                    </ul>
                    <br />
                </div>
            </Modal.Body>
            {length == (index + 1) && <>
                <Modal.Footer>
                    <Button variant="success"
                        onClick={handleSubmit(onSubmitButton)}
                    >
                        Tiếp
                    </Button>
                    <Button variant="secondary"
                        onClick={() => {
                            handleCloseDepend()
                            handleShowAdd()
                        }}

                    >
                        Quay lại
                    </Button>
                </Modal.Footer>
            </>}

        </>
    )
}