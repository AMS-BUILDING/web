import React from 'react';
import Item from './Item';
export default function CardParking() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Thẻ gửi xe</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Thẻ gửi xe</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên chủ xe</th>
                        <th>Tên xe</th>
                        <th>Loại xe</th>
                        <th>Màu</th>
                        <th>Biển số</th>
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