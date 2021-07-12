import React, { useState } from 'react';
import Item from './Item';
import ModalAdd from './ModalAdd';
export default function Notification(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <div className="add">
            <button onClick={handleShow}>
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>
        </div>
        <ModalAdd
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        />
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Mô tả</th>
                        <th>Ngày</th>

                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}