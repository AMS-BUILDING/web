import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
export default function Resident() {

    return <>
        <div className="main__table">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Số phòng</th>
                    <th></th>

                </tr>
                <Item />
                <Item />
                <Item />

            </table>
        </div>
    </>


}