import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import ItemSignUpService from './ItemSignUpService';
import ResidentCard from './ResidentCard';
import VehicleCard from './VehicleCard';
export default function SignUpService({ data, date, handleActivePage, activePage }) {
    const [accountId, setAccountId] = useState("0");
    let handleAccountId = (value) => {
        setAccountId(value)
    }
    const [isSelect, setIsSelect] = useState(true);
    return (
        <>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tổng giá thẻ xe</th>
                    <th>Tổng giá thẻ căn hộ</th>
                    <th>Tháng</th>
                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, index) => {
                        return (
                            <ItemSignUpService key={index} data={item}
                                index={index + 1}
                                accountId={accountId}
                                handleAccountId={handleAccountId}
                            // index={parseInt(5 * (activePage - 1) + index + 1)} 
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
            {accountId !== "0" &&
                <>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <input type="radio" name="select" onClick={() => setIsSelect(true)} checked={isSelect} /> Thẻ xe
                        </div>
                        <div>
                            <input type="radio" name="select" onClick={() => setIsSelect(false)} checked={!isSelect} /> Thẻ căn hộ
                        </div>
                    </div>
                    <div>
                        {isSelect ? <VehicleCard accountId={accountId} date={date} /> : <ResidentCard accountId={accountId} date={date} />}
                    </div>
                </>
            }
        </>
    )
}

