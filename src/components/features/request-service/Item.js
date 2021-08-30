import React, { useState } from 'react';
import ModalDetail from './ModalDetail';
import ModalUpdate from './ModalUpdate';
export default function Item({ index, data, search }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
   
    return (
        <>

            <tr>
                <td>{index}</td>
                <td>{data?.name}</td>
                <td>{data?.block}</td>
                <td>{data?.roomName}</td>
                <td>{data?.serviceName}</td>
                <td>{data?.dayWant}</td>
                <td>{data?.status}</td>
                <td>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <svg style={{ width: 25, height: 25, backgroundColor: '#308e3a', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                            onClick={handleShow}
                        >
                            <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                        </svg>
                        {data?.status !== "Huy bỏ" ?
                            <div>
                                <svg style={{ width: 25, height: 25, backgroundColor: '#ffc107', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                                    onClick={handleShowUpdate}
                                >
                                    <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                </svg>
                            </div>
                            :
                            <div style={{ width: 25, height: 25, color: 'white', padding: 3, borderRadius: 3, marginRight: 10 }}>

                            </div>
                        }
                    </div>
                </td>
            </tr>
            <ModalDetail
                show={show}
                handleClose={handleClose}
                id={data.id}
            />
            <ModalUpdate
                show={showUpdate}
                handleClose={handleCloseUpdate}
                statusName={data.status}
                id={data.id}
                search={search}
            />
        </>
    )
}