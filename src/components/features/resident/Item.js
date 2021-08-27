import React, { useState } from 'react';
import API from '../../../lib/API';
import ModalDelete from '../modal/ModalDelete';
import ModalDetail from './ModalDetail';
import ModalUpdate from './ModalUpdate';
export default function Item({ data, index, search }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => {
        setShowDelete(false)
    }
    const deleteItem = async () => {

        let path = `/admin/resident/remove-person/${data?.accountId}?apartmentId=${data?.apartmentId}`;
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            setShowDelete(false)
            search()
        } else {
            let response = await resp.json()
            setShowDelete(false)

        }


    }
    
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.name}</td>
                <td>{data?.phone}</td>
                <td>{data?.roomNumber}</td>
                <ModalDelete showDelete={showDelete} handleCloseDelete={handleCloseDelete} deleteItem={deleteItem} search={search} />
                <td>
                    <svg style={{ width: 25, height: 25, backgroundColor: '#308e3a', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        onClick={handleShow}
                    >
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg>
                    <svg style={{ width: 25, height: 25, backgroundColor: '#ffc107', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        onClick={handleShowUpdate}
                    >
                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                    {data?.relationShip !== "Chủ hộ" &&
                        <svg style={{ width: 25, height: 25, backgroundColor: '#dc3545', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer' }} viewBox="0 0 24 24"
                            onClick={() => {
                                setShowDelete(true)
                            }}
                        >
                            <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                        </svg>
                    }
                </td>

            </tr>
            <ModalDetail
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                data={data}
            />
            <ModalUpdate
                show={showUpdate}
                handleClose={handleCloseUpdate}
                handleShow={handleShowUpdate}
                data={data}
                search={search}
            />
        </>
    )
}