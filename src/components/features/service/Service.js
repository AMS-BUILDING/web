import React, { useEffect } from 'react';
import '../../../style/style.scss'
import ServiceItem from './ServiceItem';
export default function Service() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
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