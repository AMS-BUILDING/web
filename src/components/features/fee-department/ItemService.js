import React from 'react';
export default function ItemService({data,index}) {
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.blockName}</td>
                <td>{data?.roomNumber}</td>
                <td>{data?.subServiceName}</td>
                <td>{currencyFormat(data?.subServicePrice?.toString())}</td>
                <td>{data?.billingMonth}</td>
            </tr>
        </>
    )
}