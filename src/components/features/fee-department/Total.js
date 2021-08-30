import React from 'react';
import Pagination from 'react-js-pagination';
import ItemTotal from './ItemTotal'
export default function Total({ data, handleActivePage, activePage, search }) {
    return (
        <>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tổng phí</th>
                    <th>Tháng</th>
                    <th>Trạng thái</th>
                    <th>Cài đặt</th>
                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, index) => {
                        return (
                            <ItemTotal key={index} data={item}
                                index={index + 1}
                                // index={parseInt(5 * (activePage - 1) + index + 1)} 
                                search={search}
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

