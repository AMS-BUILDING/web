import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import API from '../../../lib/API';
import { setPageRedux } from '../../../redux/PageSlice';
import ModalUpdate from './ModalUpdate';
import ModalDelete from '../modal/ModalDeleteAppartment';

export default function Item({ index, data, search, handleRoomName ,handleAccountId}) {

    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => {
        setShowDelete(false)
    }
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    let deleteItem = async () => {
        let path = `/admin/apartment/disable?roomNumberId=${data?.roomNumberId}`;
        let resp = await API.authorizedJSONPost(path);
        if (resp.ok) {
            setShowDelete(false)
            search()
        }
    }
    let dispatch = useDispatch()
    let handleClick = (item) => {
        handleRoomName(data?.roomName)
        dispatch(setPageRedux(JSON.parse(JSON.stringify(item))))

    }
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.blockName}</td>
                <td>{data?.roomName}</td>
                <td>{data?.ownerName}</td>
                <td>
                    <svg style={{ width: 25, height: 25, backgroundColor: '#308e3a', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        onClick={() => {
                            handleClick("resident")
                            localStorage.setItem("apartmentId", data?.apartmentId)
                        }}
                    >
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg>
                    {/* <svg style={{ width: 25, height: 25, backgroundColor: '#ffc107', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        onClick={() => {
                            setShowDelete(true)
                            
                        }}
                    >
                        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg> */}
                    <svg
                    onClick={() => handleAccountId(data?.accountId)}
                    style={{ width: 25, height: 25, backgroundColor: '#dc3545', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
                    </svg>
                </td>

            </tr>

            <ModalUpdate
                show={showUpdate}
                handleClose={handleCloseUpdate}
                handleShow={handleShowUpdate}

            />
            <ModalDelete handleAccountId={handleAccountId} showDelete={showDelete} handleCloseDelete={handleCloseDelete} deleteItem={deleteItem} search={search} />

        </>
    )
}