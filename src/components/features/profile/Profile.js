import React, { useEffect, useState } from 'react';
import API, { BASE_DOWNLOAD_URL } from '../../../lib/API';
import ChangePassword from './ChangePassWord';
import UpdateProfile from './UpdateProfile';
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
    let [show,setShow] = useState(false);
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    let [showPassword,setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(true)
    }
    const handleClosePassword = () => {
        setShowPassword(false)
    }
    return (
        <>
            <div>
                <button onClick={handleShow}> Thay đổi thông tin</button>
                <button
                onClick={handleShowPassword}
                >Thay đổi mật khẩu</button>
            </div>
            <ChangePassword show={showPassword} handleShow={handleShowPassword} handleClose={handleClosePassword}  search={search} />
            <UpdateProfile show={show} handleShow={handleShow} handleClose={handleClose}  search={search} />

            <table>
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
            </table>
        </>
    )
}

