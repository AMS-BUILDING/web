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
        <div className="add">
            <button onClick={handleShow}>
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>
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
                    <th></th>

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