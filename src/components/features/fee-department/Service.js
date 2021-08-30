import React from 'react';
import Pagination from 'react-js-pagination';
import ItemService from './ItemService'
export default function Service({ data, handleActivePage, activePage }) {
    return (
        <>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tên dịch vụ</th>
                    <th>Giá dịch vụ</th>
                    <th>Tháng</th>
                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, index) => {
                        return (
                            <ItemService key={index} data={item}
                                index={parseInt(5 * (activePage - 1) + index + 1)}
                            />
                        )
                    })
                    :
                    <>
                        <tbody >
                            <tr >
                                <td colSpan="8">Không có dữ liệu</td>
                            </tr>
                        </tbody>
                    </>
                }

            </table>
            {data?.totalElement > 0 ?
                <div className="wrapper-paginate">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={parseInt(data?.totalElement)}
                        pageRangeDisplayed={3}
                        onChange={(item) => handleActivePage(item)}
                    />
                </div> : <></>
            }
        </>
    )
}

