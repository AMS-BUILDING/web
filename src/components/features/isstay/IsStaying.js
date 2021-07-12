import React from 'react';
import Item from './Item';
export default function IsStaying() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Tạm trú - tạm vắng</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Tạm trú - tạm vắng</li>
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
                        <th>Số CCCD</th>
                        <th>Địa chỉ</th>
                        <th>Quê quán</th>
                        <th>Tạm trú - tạm vắng</th>
                        <th>Lý do</th>
                        <th>Tòa</th>
                        <th>Số phòng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>

                    </tr>
                    <Item />
                </table>
            </div>
        </>
    )
}