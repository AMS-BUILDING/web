import React from 'react';
import ItemSignUpService from './ItemSignUpService';
export default function SignUpService() {
    return (
        <>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Giá làm thẻ gửi xe</th>
                    <th>Giá làm thẻ căn hộ</th>
                    <th>Tháng</th>
                    <th>Trạng thái</th>

                </tr>
                <ItemSignUpService />
                <ItemSignUpService />
                <ItemSignUpService />

            </table>
        </>
    )
}

