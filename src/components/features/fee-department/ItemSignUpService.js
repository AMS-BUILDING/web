import React from 'react';
export default function ItemSignUpService({ data, index, accountId, handleAccountId }) {
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }

    return (
        <>
            <tr style={{ cursor: 'pointer', backgroundColor: (accountId == data?.accountId) && 'orange'  }} onClick={() => handleAccountId(data?.accountId)} >
                <td>{index}</td>
                <td>{data?.blockName}</td>
                <td>{data?.roomNumber}</td>
                <td>{currencyFormat(data?.totalPriceVehicleCard?.toString())}</td>
                <td>{currencyFormat(data?.totalPriceResidentCard?.toString())}</td>
                <td>{data?.billingMonth}</td>
            </tr>
        </>
    )
}