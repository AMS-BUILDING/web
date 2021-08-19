import React, { useEffect, useState } from 'react';
import API from '../../../../lib/API';
import Pagination from "react-js-pagination";
import Item from "./Item";

export default function ResidentCard({ accountId, isAdd }) {
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        search()
    }, [])
    console.log("isAdd",isAdd)
    useEffect(() => {
        search()
    }, [accountId, isAdd])
    let search = async () => {
        let path = `/admin/resident-card/search?accountId=${accountId}&pageNo=${activePage - 1}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response);
        }
    }
    return (
        <>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Mã thẻ căn hộ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>

                    </tr>
                    {data?.totalElement > 0 ?
                        data?.data?.map((item, idx) => {
                            return (
                                <Item data={item} key={idx} index={parseInt(5 * (activePage - 1) + idx + 1)} search={search} />
                            )
                        }) :
                        <>
                            <tbody >
                                <tr >
                                    <td colSpan="8">Không có dữ liệu</td>
                                </tr>
                            </tbody>
                        </>
                    }
                </table>
            </div>
            {data?.totalElement > 0 ?
                <div className="wrapper-paginate">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={parseInt(data?.totalElement)}
                        pageRangeDisplayed={3}
                        onChange={(item) => setActivePage(item)}
                    />
                </div> : <></>
            }
        </>
    )
}