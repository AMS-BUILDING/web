import React, { useState } from 'react';
import API from '../../../lib/API';

export default function ChangePassword({ search }) {
    const [newPassword, setNewPassword] = useState();
    let [oldPassword, setOldPassword] = useState();
    const [overPw, setOverPw] = useState();
    const [message, setMessage] = useState();
    const changePassword = async () => {
        if (newPassword == overPw) {
            let path = `/tenant/change-password`;
            let resp = await API.authorizedJSONGET(path, {
                password: oldPassword,
                newPassword: newPassword
            });
            if (resp.ok) {
                setMessage("Thay đổi mật khẩu thành công")
                search()
            } else {
                let response = await resp.json();
                setMessage(response?.message)
            }
        } else {
            setMessage("Mật khẩu nhập lại chưa đúng!")
        }
    }
    return (
        <>
            <label>Mật khẩu cũ</label>
            <input type="password" className="form-control" placeholder="Password" name="oldPassword" required onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
            />
            <label>Nhập mật khẩu mới</label>
            <input type="password" className="form-control" placeholder="Password" name="newPassword" required onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
            />
            <label>Nhập lại mật khẩu</label>
            <input type="password" className="form-control" placeholder="Password" name="overPw" required onChange={(e) => setOverPw(e.target.value)}
                value={overPw}
            />
            {message && <>
                {message}
            </>}
            <button onChange={() => changePassword()}>
                Xác nhận
            </button>
        </>
    )
}