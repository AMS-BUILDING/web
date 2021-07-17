import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';

export default function Search({ handlePositionId }) {
    let [position, setPosition] = useState();
    useEffect(() => {
        fetchData()
    }, [])
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=false`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setPosition(response);
        }

    }
    return (
        <>

            <select
                onChange={e => handlePositionId(e.target.value)}
            >
                <option value={-1}>Vi tri</option>
                {position?.map((item, index) => {
                    return (
                        <option key={index} value={item?.id}>{item?.name}</option>
                    )
                })}
            </select>
        </>
    )
}