import { useState } from "react";
import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
import ModalAdd from "./ModalAdd";
export default function Employee() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Nhân viên</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li className="active">Nhân viên</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div className="add">
            <button onClick={handleShow}>Thêm Nhân Viên</button>
        </div>
        <div className="main__table">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Vị trí</th>
                    <th>Chức năng</th>

                </tr>
                <Item />
                <Item />
                <Item />

            </table>
        </div>
        <ModalAdd
            show={show}
            handleClose={handleClose}
        />
    </>
}