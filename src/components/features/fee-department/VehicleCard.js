import moment from 'moment';
import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
export default function VehicleCard({ accountId, date }) {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [accountId])
    const search = async () => {
        let path = `/admin/fee-apartment/search/vehicle-card?accountId=${accountId}&month=${date}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    return (
        <>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Loại xe</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, index) => {
                        return (
                            <Item key={index} data={item}
                                index={index + 1}
                            // index={parseInt(5 * (activePage - 1) + index + 1)} 
                            />
                        )
                    })
                    :
                    <>
                        <tbody >
                            <tr >
                                <td colSpan="8">Không có dữ liệu</td>
                            </tr>
                        </tbody>
                    </>
                }

            </table>


        </>
    )
}

function Item({ data, index }) {
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{data?.blockName}</td>
            <td>{data?.roomNumber}</td>
            <td>{data?.vehicleTypeName}</td>
            <td>{data?.quantity}</td>
            <td>{currencyFormat(data?.totalPrice?.toString())}</td>
        </tr>
    )
}

