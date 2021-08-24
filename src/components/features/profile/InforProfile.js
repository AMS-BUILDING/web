import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
export default function InforProfile({data}) {
    
    return (
        <div className="app-card-body px-4 w-100" style={{ background: '#fff' }}>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Họ và tên</strong></div>
                        <div className="item-data">{data?.name}</div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Ngày tháng năm sinh</strong></div>
                        <div className="item-data">{data?.dob}</div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Giới tính</strong></div>
                        <div className="item-data">
                            {data?.gender ? "Nam" : "Nữ"}
                        </div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Email</strong></div>
                        <div className="item-data">
                            {data?.email}
                        </div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Căn cước công dân</strong></div>
                        <div className="item-data">
                            {data?.identifyCard}
                        </div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Số điện thoại</strong></div>
                        <div className="item-data">
                            {data?.phone}
                        </div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Địa chỉ hiện tại</strong></div>
                        <div className="item-data">
                            {data?.currentAddress}
                        </div>
                    </div>

                </div>

            </div>

            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Quê quán</strong></div>
                        <div className="item-data">
                            {data?.homeTown}
                        </div>
                    </div>

                </div>

            </div>
            <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="item-label"><strong>Quyền</strong></div>
                        <div className="item-data">
                            {data?.roleId == 1 ? "Admin" : "Member"}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}