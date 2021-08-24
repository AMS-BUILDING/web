import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import API from '../../../lib/API';
export default function ModalDetail({ show, handleClose,id }) {
    const [data,setData] = useState();
    useEffect(() => {
        search()
    },[])
    useEffect(() => {
        search()
    },[id])
    let search = async () => {
        let path = `/manager-service/request-service/get-one/${id}`;
        let resp = await API.authorizedJSONGET(path);
        if(resp.ok){
            let response = await resp.json();
            setData(response)
        }
    }
   
    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết yêu cầu dịch vụ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="menu">
                        <li className="menu__item">
                            <div className="menu__item--title">Tên:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.name} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.block} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Số phòng:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.roomName} />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tên dịch vụ:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.serviceName} />
                            </div>
                        </li>
                        {/* <li className="menu__item">
                            <div className="menu__item--title">Mô tả:</div>
                            <div className="menu__item--input">
                                <textarea type="text" />
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Giá:</div>
                            <div className="menu__item--input">
                                <input type="text" />
                            </div>
                        </li> */}
                        <li className="menu__item">
                            <div className="menu__item--title">Trạng thái:</div>
                            <div className="menu__item--input">
                                <input type="text" value={data?.status} />
                            </div>
                        </li>
                    </ul>
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