import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import API from '../../../lib/API';
import { doGet } from '../../../lib/DataSource';
import '../../../style/style.scss'
import Search from './Search';
import ServiceItem from './ServiceItem';
import style from './service.module.css';

export default function Service() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const [activePage, setActivePage] = useState(1);
    const [textSearch, setTextSearch] = useState("");
    const [serviceId, setServiceId] = useState(-1);
    const [data, setData] = useState();

    useEffect(() => {
        searchSubService()
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        searchSubService()
    }, [activePage])

    let searchSubService = async () => {
        let path = `/manager-service/service/search?pageNo=${activePage - 1}&serviceId=${serviceId}&subService=${textSearch}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    let handleServiceId = (id) => {
        setServiceId(id)
    }
    let handleTextSearch = (text) => {
        setTextSearch(text)
    }
    let handleActivePage = (id) => {
        setActivePage(id)
    }
    return (
        <>
            <div className="container-fluid">
                <h4 style={{ marginBottom: 20, marginTop: 20 }}>Dịch vụ</h4>
                <div className={style.wrapContent}>
                    <Search search={searchSubService} handleServiceId={handleServiceId} handleActivePage={handleActivePage} handleTextSearch={handleTextSearch}
                        serviceId={serviceId}
                        textSearch={textSearch}
                    />
                    <div className="main__table">
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Tên dịch vụ</th>
                                <th>Tên dịch vụ phụ</th>
                                <th>Chức năng</th>
                            </tr>
                            {data?.totalElement > 0 ?
                                data?.data?.map((item, index) => {
                                    return (
                                        <ServiceItem key={index} data={item} index={parseInt(5 * (activePage - 1) + index + 1)} />
                                    )
                                })
                                :
                                <>
                                    No data
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
                </div>
            </div>

        </>
    )
}