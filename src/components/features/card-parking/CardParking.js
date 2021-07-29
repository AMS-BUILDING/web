import React, { useEffect, useState } from 'react';
import Item from './Item';
import Pagination from 'react-js-pagination';
import API from '../../../lib/API';

export default function CardParking() {
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1)
    const [ownerName, setOwnerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [lincesPlates, setLincesPlates] = useState("");
    const [status, setStatus] = useState();
    const [statusId, setStatusId] = useState(-1);
    useEffect(() => {
        search()
        window.scrollTo(0, 0)
        fetchData()
    }, [])
    useEffect(() => {
        search()
    }, [activePage])
    let search = async () => {
        let path = `/manager-service/vehicle-card/search?pageNo=${activePage - 1}&owverName=${ownerName}&phoneNumber=${phoneNumber}&lincesPlates=${lincesPlates}&statusId=${statusId}`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    let fetchData = async () => {
        let path = `/manager-service/vehicle-card/list`;
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
                            <h1>Thẻ gửi xe</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <input value={ownerName} placeholder="Chu xe" onChange={e => setOwnerName(e.target.value)} />
                    <input value={phoneNumber} placeholder="So dt" onChange={e => setPhoneNumber(e.target.value)} />
                    <input value={lincesPlates} placeholder="Bien so" onChange={e => setLincesPlates(e.target.value)} />
                    <div className="input">
                        <select
                            value={statusId}
                            onChange={e => setStatusId(e.target.value)}
                        >
                            <option>---</option>
                            {status?.map((item, index) => {
                                return (
                                    <option key={index} value={item?.id}>{item?.statusName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button onClick={() => {
                        search()
                        setActivePage(1)
                    }}>Search</button>
                </div>
            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên chủ xe</th>
                        <th>Tên xe</th>
                        <th>Loại xe</th>
                        <th>Màu</th>
                        <th>Biển số</th>
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

