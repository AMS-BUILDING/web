import React, { useEffect, useState } from 'react';
import Item from './Item';
import Pagination from 'react-js-pagination';
import API from '../../../lib/API';
import style from './cardParking.module.css';

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
            </div>
            <div className={style.wrapSearch}>
                <input value={ownerName} placeholder="Chủ xe" onChange={e => setOwnerName(e.target.value)} className={style.ipSearch} />
                <input value={phoneNumber} placeholder="Số điện thoại" onChange={e => setPhoneNumber(e.target.value)} className={style.ipSearch} />
                <input value={lincesPlates} placeholder="Biển số" onChange={e => setLincesPlates(e.target.value)} className={style.ipSearch} />
                <div className="input">
                    <select
                        value={statusId}
                        onChange={e => setStatusId(e.target.value)}
                        className={style.ipSearch}
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
                }}
                    className={style.btnSearch}><svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg></button>
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

