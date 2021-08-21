import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import { doGet } from '../../../lib/DataSource';
import style from './service.module.css';

export default function Search({ search, textSearch, handleServiceId, handleTextSearch, serviceId, handleActivePage }) {
    const [service, setService] = useState();

    useEffect(() => {
        searchService()
    }, [])
    let searchService = async () => {
        let path = '/manager-service/service/list';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setService(response)
        }
    }

    return (
        <>
            <div className={style.wrapSearch}>
                <div className="page-header float-left d-flex align-items-center">
                    <select
                        value={serviceId}
                        onChange={e => {
                            handleServiceId(e.target.value)
                        }}
                        className={style.ipSearch}
                    >
                        <option value={-1}>Tất cả</option>
                        {service?.map((item, index) => {
                            return (
                                <option value={item?.id} key={index}>{item?.serviceName}</option>
                            )
                        })}
                    </select>
                    <div>
                        <input placeholder="Tên dịch vụ"
                            value={textSearch}
                            onChange={e => {
                                handleTextSearch(e.target.value)
                            }}
                            className={style.ipSearch}
                        />
                    </div>
                    <button onClick={() => {
                        search()
                        handleActivePage(1)
                    }} className={style.btnSearch}><svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg></button>
                </div>
            </div>
        </>
    )
}