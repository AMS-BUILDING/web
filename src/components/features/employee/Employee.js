import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
export default function Employee() {
    return <>
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
    </>
}