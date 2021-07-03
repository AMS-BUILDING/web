import React, { useState } from 'react';
import Item from './Item';
import ModalAdd from './ModalAdd';
export default function Notification() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Thông báo</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Thông báo</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add">
                <button onClick={handleShow}>
                    Thêm thông báo
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