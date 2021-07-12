import React from 'react';
export default function Item({ data,index }) {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.name}</td>
                <td>{data?.identifyCard}</td>
                <td>{data?.homeTown}</td>
                <td>{data?.absentType}</td>
                <td>{data?.reason}</td>
                <td>{data?.block}</td>
                <td>{data?.roomNumber}</td>
                <td>{data?.startDate}</td>
                <td>{data?.endDate}</td>
            </tr>
        </>
    )
}