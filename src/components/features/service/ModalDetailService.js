import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export default function ModalDetailService({ show, handleClose, data }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết dịch vụ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data?.map((item, index) => {
                        return (
                            <DetailItem data={item} key={index} />
                        )
                    })}
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

function DetailItem({ data }) {
    return (
        <>
            <ul className="menu">
                <li className="menu__item">
                    <div className="menu__item--title">Tên dịch vụ phụ:</div>
                    <div className="menu__item--input">
                        <input type="text"
                            value={data?.subServiceName}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Tên dịch vụ :</div>
                    <div className="menu__item--input">
                        <input type="text"
                            value={data?.serviceName}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Chi tiết dịch vụ phụ:</div>
                    <div className="menu__item--input">
                        <input type="text"
                            value={data?.detailSubServiceName}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Lý do:</div>
                    <div className="menu__item--input">
                        <input type="text"
                            value={data?.reasonName}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Giá:</div>
                    <div className="menu__item--input">
                        <input type="text"
                            value={data?.price}
                        />
                    </div>
                </li>
            </ul>
            <hr />
        </>
    )
}