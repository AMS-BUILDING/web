import React, { useEffect, useState } from 'react';
import API, { BASE_DOWNLOAD_URL } from '../../../lib/API';
import ChangePassword from './ChangePassWord';
import UpdateProfile from './UpdateProfile';
import style from './profile.module.css';

export default function Profile() {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, []);
    const search = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response);
        }
    }
    let [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    let [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(true)
    }
    const handleClosePassword = () => {
        setShowPassword(false)
    }
    return (
        <div className={style.wrapProfile}>
            <div className={style.wrapChange}>
                <button className={style.btnAdd} onClick={handleShow} style={{ marginRight: 30 }}> Thay đổi thông tin</button>
                <button
                    onClick={handleShowPassword}
                    className={style.btnAdd}
                >Thay đổi mật khẩu</button>
            </div>
            <ChangePassword show={showPassword} handleShow={handleShowPassword} handleClose={handleClosePassword} search={search} />
            <UpdateProfile show={show} handleShow={handleShow} handleClose={handleClose} search={search} />

            {/* <table>
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Email</th>
                        <th>Số CCCD</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Quê quán</th>
                        <th>Quyền</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data?.name}</td>
                        <td>{data?.dob}</td>
                        <td>{data?.gender ? "Nam" : "Nữ"}</td>
                        <td>{data?.email}</td>
                        <td>{data?.identifyCard}</td>
                        <td>{data?.phone}</td>
                        <td>{data?.currentAddress}</td>
                        <td>{data?.homeTown}</td>
                        <td>{data?.roleId == 1 ? "Admin" : "Member"}</td>
                        <td>
                            <img className="user-avatar rounded-circle"
                                src={` ${BASE_DOWNLOAD_URL}${data?.image}`} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: 50 }} />
                        </td>
                    </tr>
                </tbody>
            </table> */}
            <div className="container">
                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                    <div className="app-card-header p-3 border-bottom-0">
                        <div className="row align-items-center gx-3">
                            <div className="col-auto">
                                <div className="app-icon-holder">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </div>
                                {/*//icon-holder*/}
                            </div>
                            {/*//col*/}
                            <div className="col-auto">
                                <h4 className="app-card-title">Tài khoản</h4>
                            </div>
                            {/*//col*/}
                        </div>
                        {/*//row*/}
                    </div>
                    {/*//app-card-header*/}
                    <div className="app-card-body px-4 w-100">
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label mb-2"><strong>Ảnh đại diện</strong></div>
                                    <div className="item-data"> <img className="user-avatar rounded-circle"
                                        src={` ${BASE_DOWNLOAD_URL}${data?.image}`} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: 50 }} /></div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Họ và tên</strong></div>
                                    <div className="item-data">{data?.name}</div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Ngày tháng năm sinh</strong></div>
                                    <div className="item-data">{data?.dob}</div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Giới tính</strong></div>
                                    <div className="item-data">
                                        {data?.gender ? "Nam" : "Nữ"}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Email</strong></div>
                                    <div className="item-data">
                                        {data?.email}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Căn cước công dân</strong></div>
                                    <div className="item-data">
                                        {data?.identifyCard}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Số điện thoại</strong></div>
                                    <div className="item-data">
                                        {data?.phone}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Địa chỉ hiện tại</strong></div>
                                    <div className="item-data">
                                        {data?.currentAddress}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
                        </div>
                        {/*//item*/}
                        <div className="item border-bottom py-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <div className="item-label"><strong>Quê quán</strong></div>
                                    <div className="item-data">
                                        {data?.homeTown}
                                    </div>
                                </div>

                            </div>
                            {/*//row*/}
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
                            {/*//row*/}
                        </div>
                    </div>
                    {/*//app-card-body*/}
                    <div className="app-card-footer p-4 mt-auto">
                    </div>
                    {/*//app-card-footer*/}
                </div>
                {/*//row*/}
            </div>
        </div>
    )
}

