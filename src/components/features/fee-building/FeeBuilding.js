import React from 'react';
import Item from './Item';
export default function FeeBuilding(){
    return(
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Phí điện</th>
                        <th>Phí nước</th>
                        <th>Phí dịch vụ</th>
                        <th>Tháng</th>
                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}