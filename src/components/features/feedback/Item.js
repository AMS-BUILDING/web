import React from 'react';
export default function Item({ data, index }) {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.name}</td>
                <td>{data?.description}</td>
                <td>{data?.createdDate}</td>

            </tr>
        </>
    )
}