import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';


export default function PersonDepend({ addEvent, minusEvent, index, length, ownPerson, apartmentId, handleDepend, depend, handleShowSumbit, handleCloseDepend, handleShowAdd }) {
    let [position, setPosition] = useState();
    const [message, setMessage] = useState();
    let [person, setPerson] = useState(depend[index]);
    let [positionId, setPositionId] = useState(person?.positionId ? person?.positionId : 5);
    const [gender, setGender] = useState(true)
  

    let handleData = (e) => {
        let { value, name } = e.target;
        setPerson({
            ...person,
            [name]: value
        })
    }

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
            positionId: positionId,
            currentAddress: form?.currentAddress,
            homeTown: form?.homeTown
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
            setPerson(data)
            handleDepend(data, index)
            setMessage(null)
        } else {
            let response = await resp.json();
            setMessage(response?.message)
        }
    }

    let onSubmitButton = async form => {
        console.log(form)
        if (form?.name == "" && form?.phone == "" && form?.currentAddress == "" && form?.email == "" && form?.homeTown == "" && form?.identifyCard == "") {
            handleCloseDepend()

            handleShowSumbit()
        } else {
            let path = '/admin/validate/resident';
            let data = {
                name: form?.name,
                identifyCard: form?.identifyCard,
                phone: form?.phone,
                email: form?.email,
                gender: gender,
                dob: form?.dob,
                positionId: positionId,
                currentAddress: form?.currentAddress,
                homeTown: form?.homeTown
            }

            let objData = {
                apartmentId: apartmentId,
                residentRequestList: index == 0 ? [data] : [...depend, data],
                ownerRequest: ownPerson
            };
            let resp = await API.authorizedJSONPost(path, objData);
            if (resp.ok) {
                setMessage(null)
                setPerson(data)
                handleDepend(data, index)
                handleCloseDepend()
                handleShowSumbit()
            } else {
                let response = await resp.json();
                setMessage(response?.message)
            }
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
                                    {...register("name")}
                                    name="name"
                                    value={person?.name}
                                    onChange={e => handleData(e)}
                                />
                            </div>
                            <div className="menu__item--error"> </div>
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
                            <div className="menu__item--error"> </div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input type="date"
                                    name="dob"
                                    {...register("dob")}
                                    value={person?.dob}
                                />
                            </div>
                            <div className="menu__item--error"> </div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="phone"
                                    {...register("phone")}

                                    value={person?.phone}
                                    onChange={e => handleData(e)}
                                />
                            </div>
                            <div className="menu__item--error"></div>

                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="currentAddress"
                                    {...register("currentAddress")}

                                    value={person?.currentAddress}
                                    onChange={e => handleData(e)}
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
                                    value={person?.homeTown}
                                    onChange={e => handleData(e)}
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
                                    value={person?.email}
                                    onChange={e => handleData(e)}
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
                                    value={person?.identifyCard}
                                    onChange={e => handleData(e)}
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
                                {length > 1 && <button className="sub__btn" onClick={() => {
                                    minusEvent()

                                }}>-</button>}

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