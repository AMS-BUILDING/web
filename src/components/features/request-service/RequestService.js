import React from 'react';
import Item from './Item';
export default function RequestService() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Yêu cầu dịch vụ</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Yêu cầu dịch vụ</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Tên dịch vụ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>

                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>

            </div>
        </>
    )
}