import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
import moment from 'moment';
export default function ModalAdd({ show, handleClose }) {
    const [data, setData] = useState();
    const handleData = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    let add = async () => {
        let path = "/admin/employee/add";
        let resp = await API.authorizedJSONPost(path, data);
        if (resp.status === 201) {
            console.log('ok')
        } else {
            let response = await resp.json();
            alert(response.message)
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
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">
                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <input type="text" name="name"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giới tính:</div>
                            <div className="menu__item--input">
                                <div style={{ display: 'flex', alignItems: 'center', width: 300 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                        onClick={() => {
                                            setData({
                                                ...data,
                                                gender: true
                                            })
                                        }}
                                    /> Nam</div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 50 }}
                                        onClick={() => {
                                            setData({
                                                ...data,
                                                gender: false
                                            })
                                        }}
                                    />Nữ</div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Ngày sinh:</div>
                            <div className="menu__item--input">
                                <input type="date"
                                    name="dob"
                                    onChange={(e) => setData({
                                        ...data,
                                        dob: moment(e.target.value).format("DD/MM/YYYY")
                                    })}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số ĐT:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="phoneNumber"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Email:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="email"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số CCCD</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="identifyCard"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Địa chỉ hiện tại:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="currentAddress"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Quê quán:</div>
                            <div className="menu__item--input">
                                <input type="text"
                                    name="homeTown"
                                    onChange={(e) => handleData(e)}
                                />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Vị trí:</div>
                            <div className="menu__item--input">
                                <select
                                    onChange={e => setData({
                                        ...data,
                                        position: e.target.value
                                    })}
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

                        add()
                    }}>
                        Thêm
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}