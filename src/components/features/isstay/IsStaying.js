import React from 'react';
import Item from './Item';
export default function IsStaying() {
    return (
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số CCCD</th>
                        <th>Địa chỉ</th>
                        <th>Quê quán</th>
                        <th>Tạm trú - tạm vắng</th>
                        <th>Lý do</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>

                    </tr>
                    <Item />
                </table>
            </div>
        </>
    )
}