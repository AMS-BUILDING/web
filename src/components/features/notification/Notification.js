import React from 'react';
import Item from './Item';
export default function Notification(){
    return(
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Mô tả</th>
                        <th>Ngày</th>

                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}