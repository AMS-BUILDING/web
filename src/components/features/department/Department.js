import { useState } from "react";
import Item from "./Item";
import ModalAddAddress from "./ModalAddAddress";
export default function Department() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Căn hộ</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li className="active">Căn hộ</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div className="add">
            <button onClick={handleShow}>Thêm căn hộ</button>
        </div>
        <ModalAddAddress
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
        />

        <div className="main__table">
            <table>
                <tr>

                    <th>Số thứ tự</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tên chủ hộ</th>
                    <th>Chức năng</th>
                </tr>

                <Item />
                <Item />
                <Item />

            </table>
        </div>
    </>
}