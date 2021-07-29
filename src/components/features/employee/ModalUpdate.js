import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import API from '../../../lib/API';

export default function ModalUpdate({ show, handleClose, data, search }) {
    let [position, setPosition] = useState();
    useEffect(() => {
        fetchData()
    }, [])
    // useEffect(() => {
    //     fetchData()
    // }, [data])



    const [employee, setEmployee] = useState({
        name: data?.name,
        gender: data?.gender == 'nam' ? true : false,
        dob: data?.dob,
        phoneNumber: data?.phone,
        identifyCard: data?.identityCard,
        currentAddress: data?.currentAddress,
        homeTown: data?.homeTown,
        position: null,
        email: data?.email
    });
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setPosition(response);
            let arr = await response?.filter((item) => item.name == data?.positionName);
            setEmployee({
                ...employee,
                position: arr[0].id
            })
        }
    }
    const handleEmployee = (e) => {
        let { value, name } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        })
    }

    console.log(employee)
    let update = async () => {
        let path = `/admin/employee/update/${data?.id}`;
        let resp = await API.authorizedJSONPost(path, employee);
        if (resp.ok) {
            let response = await resp.json();
            alert("Sua thong tin thanh cong")
            handleClose()
            search()
        } else {
            let response = await resp.json();
            console.log(response)
        }

    }

    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật thông tin nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">
                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="name"
                                    value={employee?.name}
                                    onChange={e => handleEmployee(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                        checked={employee?.gender ? true : false}
                                        onClick={() => {
                                            setEmployee({
                                                ...employee,
                                                gender: true
                                            })
                                        }}
                                    /> Nam</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input
                                        onClick={() => {
                                            setEmployee({
                                                ...employee,
                                                gender: false
                                            })
                                        }}
                                        type="radio" name="gender" style={{ width: 50 }} checked={employee?.gender ? false : true} />Nữ</div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    onChange={e => setEmployee({
                                        ...employee,
                                        dob: moment(e.target.value).format("DD/MM/YYYY")
                                    })}
                                    name="dob"
                                    value={employee?.dob}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="phoneNumber"
                                    value={employee?.phoneNumber}
                                    onChange={e => handleEmployee(e)}

                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="email"
                                    value={employee?.email}
                                    onChange={e => handleEmployee(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số CCCD</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="identifyCard"
                                    value={employee?.identifyCard}
                                    onChange={e => handleEmployee(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="currentAddress"
                                    value={employee?.currentAddress}
                                    onChange={e => handleEmployee(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê quán:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="homeTown"
                                    value={employee?.homeTown}
                                    onChange={e => handleEmployee(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <select
                                    onChange={e => setEmployee({
                                        ...employee,
                                        position: e.target.value
                                    })}
                                    value={employee?.id}
                                >
                                    {position?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.id}>{item?.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        update()
                    }}>
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}