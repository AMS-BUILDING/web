import React from 'react';
import Item from './Item';
export default function CardDepartment(){
    return(
        <>
            <div className="main__table">
                <table>
                    <tr>
                       <th>STT</th>
                       <th>Tên</th>
                       <th>Số điện thoại</th>
                       <th>Số thẻ căn hộ</th>
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