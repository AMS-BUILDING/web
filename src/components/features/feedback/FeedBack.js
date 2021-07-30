import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import API from '../../../lib/API';
import { doGet } from '../../../lib/DataSource';
import Item from './Item';
import Search from './Search';
import style from './feedback.module.css';

export default function FeedBack() {
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);

    const [textSearch, setTextSearch] = useState("");
    useEffect(() => {
        search()
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        search()
    }, [activePage])

    let search = async () => {
        let path = `/admin/feedback/search?pageNo=${activePage - 1}&name=${textSearch}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    let handleTextSearch = (text) => {
        setTextSearch(text)
    }
    let handleActivePage = (num) => {
        setActivePage(num)
    }
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Phản hồi</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Search text={textSearch} handleTextSearch={handleTextSearch} search={search} handleActivePage={handleActivePage} />
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th>Ngày</th>

                    </tr>
                    {data?.totalElement > 0 ?
                        data?.data?.map((item, idx) => {
                            return <Item data={item} index={parseInt(5 * (activePage - 1) + idx + 1)} />
                        }) :

                        <>
                            <tbody >
                                <tr >
                                    <td colSpan="4">Không có dữ liệu</td>
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