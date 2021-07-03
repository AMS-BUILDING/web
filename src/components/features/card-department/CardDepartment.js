import React, { useState } from 'react';
import Item from './Item';
import ModalAdd from './ModalAdd';
export default function CardDepartment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Thẻ căn hộ</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Thẻ căn hộ</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add">
                <button onClick={handleShow}>
                    Thêm thẻ căn hộ
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
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Số thẻ căn hộ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>



                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}