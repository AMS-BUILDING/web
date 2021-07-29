import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import Item from './Item';
import Pagination from 'react-js-pagination';
export default function RequestService() {
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1)
    const [name, setName] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [statusId, setStatusId] = useState(-1);
    let [status, setStatus] = useState();
    useEffect(() => {
        search()
        window.scrollTo(0, 0)
        fetchData()
    }, [])
    useEffect(() => {
        search()
    }, [activePage])

    let search = async () => {
        let path = `/manager-service/request-service/search?pageNo=${activePage - 1}&name=${name}&serviceName=${serviceName}&statusId=${statusId}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    let fetchData = async () => {
        let path = `/manager-service/request-service/list`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setStatus(response);
        }
    }
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Yêu cầu dịch vụ</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <input
                    placeholder="Ten"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input
                    placeholder="Ten dich vu"
                    onChange={e => setServiceName(e.target.value)}
                    value={serviceName}
                />
                <div className="input">
                    <select
                        value={statusId}
                        onChange={e => setStatusId(e.target.value)}
                    >
                        {status?.map((item, index) => {
                            return (
                                <option key={index} value={item?.id}>{item?.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={() => {
                    search()
                    setActivePage(1)
                }}>Search</button>

            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Tên dịch vụ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>

                    </tr>
                    {data?.totalElement > 0 ?
                        data?.data?.map((item, index) => {
                            return (
                                <Item key={index} data={item} index={parseInt(5 * (activePage - 1) + index + 1)} search={search} />
                            )
                        })
                        :
                        <>
                            <tbody >
                                <tr >
                                    <td colSpan="7">Không có dữ liệu</td>
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