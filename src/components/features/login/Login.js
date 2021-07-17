import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../../lib/API';
import { doPost } from '../../../lib/DataSource';

export default function Login() {
    let history = useHistory();
    const [account, setAccount] = useState();

    let login = async () => {
        let path = "/login";
        let resp = await API.anonymousJSONPost(path, account);
        if (resp.status === 200) {
            let response = await resp.json();
            localStorage.setItem("token",response.accessToken);
            history.push('/admin')
        }else{
            alert("Tai khoan chua dung!")
        }
    }
   
    return (
        <>
            <div>
                <label>Ten dang nhap</label>
                <input type="text" name="username"
                    onChange={(e) => setAccount({
                        ...account,
                        username: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Mat khau</label>
                <input type="text" name="password"
                    onChange={(e) => setAccount({
                        ...account,
                        password: e.target.value
                    })}
                />
            </div>
            <button onClick={() => login()}>Login</button>
        </>
    )
}