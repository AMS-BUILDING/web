import React from 'react';
import Item from './Item';
export default function FeeBuilding() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Phí tòa nhà</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Phí tòa nhà</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Phí điện</th>
                        <th>Phí nước</th>
                        <th>Phí dịch vụ</th>
                        <th>Tháng</th>
                    </tr>
                    <Item />
                    <Item />
                    <Item />

                </table>
            </div>
        </>
    )
}