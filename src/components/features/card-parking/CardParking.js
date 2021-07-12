import React from 'react';
import Item from './Item';
export default function CardParking() {
    return (
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên chủ xe</th>
                        <th>Tên xe</th>
                        <th>Loại xe</th>
                        <th>Màu</th>
                        <th>Biển số</th>
                        <th>Trạng thái</th>
                        <th></th>

                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}