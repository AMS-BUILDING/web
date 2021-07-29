import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
export default function Resident() {

    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Cư dân</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="main__table">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Số phòng</th>
                    <th>Chức năng</th>

                </tr>
                <Item />
                <Item />
                <Item />

            </table>
        </div>
    </>


}