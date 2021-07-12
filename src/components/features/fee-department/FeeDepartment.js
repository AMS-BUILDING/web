import React from 'react';
import Item from './Item';
export default function FeeDepartment(){
    return(
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Tên dịch vụ</th>
                        <th>Giá dịch vụ</th>
                        <th>Tháng</th>
                        <th>Trạng thái</th>

                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}