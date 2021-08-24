import moment from 'moment';
import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
export default function ResidentCard({ accountId, date }) {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [accountId])
    const search = async () => {
        let path = `/admin/fee-apartment/search/resident-card?accountId=${accountId}&month=${date}`;
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
                    <th>Mã thẻ căn hộ</th>
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
    return (
        <tr>
            <td>{index}</td>
            <td>{data?.residentCode}</td>
        </tr>
    )
}

