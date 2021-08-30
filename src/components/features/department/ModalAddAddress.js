import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAdd from './ModalAdd'
import API from '../../../lib/API';
export default function ModalAddAddress({ show, handleClose, handleShow, search }) {
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    let [blockId, setBlockId] = useState(1)
    let [blocks, setBlocks] = useState([]);
    let [floors, setFloors] = useState([]);
    let [floorId, setFloorId] = useState(1);
    const [message, setMessage] = useState();
    let [isClose,setIsClose] = useState(false);
    
    useEffect(() => {
        searchBlocks()
        searchFloors()
    }, [])
    useEffect(() => {
        searchFloors()
    }, [blockId])
    let searchBlocks = async () => {
        let path = '/admin/block/list';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setBlocks(response)
        }
    }
    let searchFloors = async () => {
        let path = `/admin/floor/list?blockId=${blockId}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setFloors(response)
        }
    }

    let onSumbit = () => {
        if (floorId) {
            setMessage(null)
            handleClose();
            handleShowAdd()
        } else {
            setMessage("Bạn vui lòng chọn tầng/tòa")
        }
    }
    return (
        <>

            <Modal show={show} onHide={() => {
                handleClose()
                setIsClose(!isClose)
              
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm cư dân vào căn hộ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="menu__item--error" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {message && <span>{message}</span>}</div>

                    <ul className="menu">

                        <li className="menu__item">
                            <div className="menu__item--title">Tòa:</div>
                            <div className="menu__item--input">
                                <select
                                    value={blockId}
                                    onChange={e => setBlockId(e.target.value)}
                                    defaultValue={blocks[0]?.id}
                                >

                                    {blocks?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.id}>{item?.blockName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__item--title">Tầng:</div>
                            <div className="menu__item--input">
                                <select
                                    value={floorId}
                                    onChange={e => setFloorId(e.target.value)}
                                    defaultValue={floors[0]?.id}
                                >

                                    {floors?.map((item, index) => {
                                        return (
                                            <option key={index} value={item?.id}>{item?.floorName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </li>

                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        onSumbit()
                    }}>
                        Tiếp
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        setIsClose(!isClose)
                    }} >
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalAdd
                show={showAdd}
                handleCloseAdd={handleCloseAdd}
                handleShowAdd={handleShowAdd}
                handleShow={handleShow}
                blockId={blockId}
                floorId={floorId}
                search={search}
                isClose={isClose}

            />
        </>
    )
}