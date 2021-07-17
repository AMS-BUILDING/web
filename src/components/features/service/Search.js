import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import { doGet } from '../../../lib/DataSource';
export default function Search({ search, textSearch, handleServiceId, handleTextSearch, serviceId,handleActivePage }) {
    const [service, setService] = useState();

    useEffect(() => {
        searchService()
    }, [])
    let searchService = async () => {
        let path = '/manager-service/service/list';
        let resp = await API.authorizedJSONGET(path);
        if(resp.ok){
            let response = await resp.json();
            setService(response)
        }
    }

    return (
        <>
            <div className="col-sm-8">
                <div className="page-header float-left">
                    <select
                        value={serviceId}
                        onChange={e => {
                            handleServiceId(e.target.value)
                        }}
                    >
                        <option value={-1}>Tat ca</option>
                        {service?.map((item, index) => {
                            return (
                                <option value={item?.id} key={index}>{item?.serviceName}</option>
                            )
                        })}
                    </select>
                    <div>
                        <input placeholder="Ten dich vu phu"
                            value={textSearch}
                            onChange={e => {
                                handleTextSearch(e.target.value)
                            }}
                        />
                    </div>
                    <button onClick={() => {
                        search()
                        handleActivePage(1)
                    }}>Search</button>
                </div>
            </div>
        </>
    )
}