import React, { useState } from 'react';
import API from '../../../lib/API';
import style from './profile.module.css';

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
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <div style={{ width: 180 }}>
                    <label style={{ color: 'black', marginTop: 0 }}>Mật khẩu cũ</label>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="oldPassword" required onChange={(e) => setOldPassword(e.target.value)}
                        value={oldPassword}
                    />
                </div>

            </div>
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <div style={{ width: 180 }}>
                    <label style={{ color: 'black', marginTop: 0 }}>Nhập mật khẩu mới</label>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="newPassword" required onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <div style={{ width: 180 }}>
                    <label style={{ color: 'black', marginTop: 0 }}>Nhập lại mật khẩu</label>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="overPw" required onChange={(e) => setOverPw(e.target.value)}
                        value={overPw}
                    />
                </div>
            </div>
            {message && <>
                {message}
            </>}
            <button className={style.btnConfirm} onChange={() => changePassword()} style={{ marginLeft: 16 }}>
                Xác nhận
            </button>
        </>
    )
}