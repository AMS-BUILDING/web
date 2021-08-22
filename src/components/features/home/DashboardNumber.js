import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';

export default function DashboardNumber() {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let path = '/manager-service/dashboard/dashboardNumber';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    return (
        <>
            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-1">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton1" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">{data?.numberOfEmptyApartment}</span>
                        </h4>
                        <p className="text-light">Số căn hộ còn trống</p>

                        <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                            <canvas id="widgetChart1" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-2">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton2" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">{data?.numberOfAccount}</span>
                        </h4>
                        <p className="text-light">Cư dân</p>

                        <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                            <canvas id="widgetChart1" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-3">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton3" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">{data?.totalServiceRequest}</span>
                        </h4>
                        <p className="text-light">Yêu cầu dịch vụ</p>

                    </div>

                    <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                        <canvas id="widgetChart1" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-3">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton4" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">{currencyFormat(data?.totalRevenue?.toString())}</span>
                        </h4>
                        <p className="text-light">Doanh thu</p>

                    </div>

                    <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                        <canvas id="widgetChart1" />
                    </div>
                </div>
            </div>
        </>
    )
}