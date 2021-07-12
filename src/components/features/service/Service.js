import React from 'react';
import '../../../style/style.scss'
import ServiceItem from './ServiceItem';
export default function Service() {
    return (
        <>
            <table>
                <tr>

                    <th>STT</th>
                    <th>Tên dịch vụ</th>
                    <th>Tên dịch vụ phụ</th>
                    <th></th>
                </tr>

               <ServiceItem />
               <ServiceItem />
               <ServiceItem />
            </table>
        </>
    )
}