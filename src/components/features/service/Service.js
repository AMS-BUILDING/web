import React, { useEffect } from 'react';
import '../../../style/style.scss'
import ServiceItem from './ServiceItem';
export default function Service() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Dịch vụ</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Dịch vụ</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__table">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên dịch vụ</th>
                        <th>Tên dịch vụ phụ</th>
                        <th></th>
                    </tr>
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </table>
            </div>
        </>
    )
}