import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
export default function SubItem({ index, data, positionId }) {
    const [positionName, setPositionName] = useState();
    useEffect(() => {
        fetchData()
    }, [positionId])
    let fetchData = async () => {
        let path = `/manager-service/position/search?show=true`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setPositionName(response?.filter((item) => item.id == positionId)?.[0]?.name)
        }
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{data?.name}</td>
            <td>{data?.phone}</td>
            <td>{data?.currentAddress}</td>
            <td>{data?.email}</td>
            <td>{data?.identifyCard}</td>
            <td>{data?.homeTown}</td>
            <td>{positionName}</td>

        </tr>
    )
}