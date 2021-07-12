import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
import Item from './Item';
import Pagination from "react-js-pagination";

export default function IsStaying() {
    const [data, setData] = useState();
    let [activePage, setActivePage] = useState(1);
    let [name, setName] = useState("");
    let [identifyCard, setIdentifyCard] = useState("");
    let [absentType, setAbsentType] = useState(-1);
    useEffect(() => {
        getAbsent()
    }, [])
    useEffect(() => {
        getAbsent()
    }, [activePage])
    const getAbsent = async () => {
        let path = `/absent/search?pageNo=${activePage - 1}&name=${name}&identifyCard=${identifyCard}&absentType=${absentType}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setData(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(absentType)
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Tạm trú - tạm vắng</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 wrapp_header" >
                    <div className=" wrapp_header--item">
                        <input placeholder="Họ tên"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name}
                        />
                    </div>
                    <div className=" wrapp_header--item">
                        <input placeholder="Số CCCD"
                            onChange={(e) => {
                                setIdentifyCard(e.target.value)
                            }}
                            value={identifyCard}
                        />
                    </div>
                    <div className=" wrapp_header--item">
                        <select
                            onChange={e => setAbsentType(e.target.value)}
                            value={absentType}
                        >
                            <option value={-1}>Tất cả</option>
                            <option value={1}>Tạm trú</option>
                            <option value={2}>Tạm vắng</option>
                        </select>
                    </div>
                    <button
                        onClick={() => {
                            getAbsent()
                            setIdentifyCard("")
                            setName("")
                            setAbsentType(-1)
                            setActivePage(1)
                        }}
                    ><svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg></button>
                </div>

            </div>

            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số CCCD</th>
                        <th>Địa chỉ</th>
                        <th>Tạm trú - tạm vắng</th>
                        <th>Lý do</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>

                    </tr>
                    {data?.totalElement > 0 ?
                        data?.data?.map((item, idx) => {
                            return (
                                <Item data={item} key={idx} index={parseInt(5 * (activePage - 1) + idx + 1)} />
                            )
                        }) :
                        <>
                            <div>
                                No data
                            </div>
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