import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalDetail({ show, handleClose,data }) {
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết thông tin làm thẻ xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <ul className="menu">
                            <li className="menu__item">
                                <div className="menu__item--title">Tên chủ xe:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.vehicleOwner} />
                                </div>
                            </li>
                                                      
                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.phoneNumber} />
                                </div>
                            </li>
                            {/* <li className="menu__item">
                                <div className="menu__item--title">Số CCCD</div>
                                <div className="menu__item--input">
                                    <input type="text" value={} />
                                </div>
                            </li> */}
                            
                            <li className="menu__item">
                                <div className="menu__item--title">Tên xe:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.vehicleName} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Loại xe:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.type} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Màu xe:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.color} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Biển số:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.licensePlates} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Trạng thái:</div>
                                <div className="menu__item--input">
                                    <input type="text" value={data?.status} />
                                </div>
                            </li>
                           
                           
                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}