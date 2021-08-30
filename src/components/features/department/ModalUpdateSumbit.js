import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import SubItem from './SubItem';
export default function ModalUpdateSumbit({ show, handleCloseSumbit, handleShow }) {

    return (
        <>

            <Modal show={show} onHide={handleCloseSumbit} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Tòa:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số phòng:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Tên chủ hộ:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Giới tính:</div>
                                <div className="menu__item--input">
                                    <div style={{ display: 'flex', alignItems: 'center', width: 700 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}><input type="radio" name="gender" style={{ width: 20 }} /> <span style={{ marginLeft: '5px' }}>Nam</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }} /><span style={{ marginLeft: '5px' }}>Nữ</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Ngày sinh:</div>
                                <div className="menu__item--input">
                                    <input type="date" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Email:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số CCCD</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Địa chỉ hiện tại:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Quê quán:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Người phụ thuộc:</div>

                            </li>

                            <table>
                                <tr>

                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Email</th>
                                    <th>Số CCCD</th>
                                    <th>Quê quán</th>
                                    <th>Quan hệ với chủ hộ</th>

                                </tr>
                                <SubItem />
                                <SubItem />
                                <SubItem />

                            </table>
                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleCloseSumbit()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleCloseSumbit()
                        handleShow()
                    }}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}