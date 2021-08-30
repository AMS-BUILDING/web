import React, { useState } from 'react';
import ModalUpdate from './ModalUpdate';
export default function ItemTotal({ data, index, search }) {
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.blockName}</td>
                <td>{data?.roomNumber}</td>
                <td>{currencyFormat(data?.totalPrice?.toString())}</td>
                <td>{data?.billingMonth}</td>
                <td>{data?.statusName}</td>
                <td>
                    {data?.statusName == "Chưa thanh toán" &&  <svg style={{ width: 25, height: 25, backgroundColor: '#ffc107', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        onClick={handleShowUpdate}
                    >
                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>}
                   
                </td>
            </tr>
            <ModalUpdate show={showUpdate} handleClose={handleCloseUpdate} id={data?.id} search={search} />
        </>
    )
}