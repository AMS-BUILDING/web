import React from 'react';
import ItemService from './ItemService'
export default function Service() {
    return (
        <>
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
                <ItemService />
                <ItemService />
                <ItemService />

            </table>
        </>
    )
}

