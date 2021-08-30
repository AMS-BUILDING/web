import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import SubItem from './SubItem';
import API from '../../../lib/API';
export default function ModalAddSumbit({ show, handleCloseSumbit, handleShow, depend, ownPerson, apartmentId, blockId, floorId, search }) {

    let [blockName, setBlockName] = useState();
    let [roomName, setRoomName] = useState();

    useEffect(() => {
        searchBlocks();
        searchApartment()
    }, [blockId, floorId, apartmentId])
    let searchBlocks = async () => {
        let path = '/admin/block/list';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setBlockName(response?.filter(item => item?.id == blockId)?.[0]?.blockName)
        }
    }
    let searchApartment = async () => {
        let path = `/admin/room-number/search?floorId=${floorId}&blockId=${blockId}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setRoomName(response?.filter(item => item?.apartmentId == apartmentId)?.[0]?.roomName)
        }
    }
    let addApartment = async () => {
        let path = `/admin/apartment/add/owner`;
        let resp = await API.authorizedJSONPost(path, ownPerson);

        if (resp.ok) {
            let pathDepend = `/admin/apartment/add/resident`;
            let objData = {
                apartmentId: apartmentId,
                residentRequestList: depend
            }
            let respDepend = await API.authorizedJSONPost(pathDepend, objData);
            if (respDepend.ok) {
                search();
                handleCloseSumbit()
            }
        }
    }
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
                                    <input type="text" className="ipt" value={blockName} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số phòng:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt" value={roomName} />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Tên chủ hộ:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.name}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Giới tính:</div>
                                <div className="menu__item--input">
                                    <div style={{ display: 'flex', alignItems: 'center', width: 700 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}><input type="radio" name="gender" style={{ width: 20 }}
                                            checked={ownPerson?.gender}
                                        /> <span style={{ marginLeft: 5 }}>Nam</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}><input type="radio" name="gender" style={{ width: 20 }}
                                            checked={!ownPerson?.gender}
                                        /><span style={{ marginLeft: 5 }}>Nữ</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Ngày sinh:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.dob}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số ĐT:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.phone}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Email:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.email}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Số CCCD</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.identifyCard}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Địa chỉ hiện tại:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.currentAddress}
                                    />
                                </div>
                            </li>
                            <li className="menu__item">
                                <div className="menu__item--title">Quê quán:</div>
                                <div className="menu__item--input">
                                    <input type="text" className="ipt"
                                        value={ownPerson?.homeTown}
                                    />
                                </div>
                            </li>

                            {depend?.length > 0 &&
                                <>
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
                                        {depend?.map((item, index) => {
                                            return (
                                                <SubItem key={index} index={index + 1} data={item} positionId={item?.positionId} />
                                            )
                                        })}


                                    </table>
                                </>
                            }

                        </ul>

                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        addApartment()
                    }}>
                        Thêm
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleCloseSumbit()
                        handleShow()
                    }}>
                        Quay lại
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}