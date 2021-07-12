import React from 'react';
import Item from './Item';
export default function RequestService(){
    return(
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Tên dịch vụ</th>
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