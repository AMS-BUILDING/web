import { useEffect, useState } from "react";
import API, { BASE_DOWNLOAD_URL } from "../../lib/API";

export default function Header({ handleClick,isChange }) {
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isChange])
    const search = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    console.log(data)
    return <header id="header" className="header">
        <div className="header-menu">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div className="language-select dropdown" id="language-select">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" id="language" aria-haspopup="true"
                        aria-expanded="true">
                        <i className="flag-icon flag-icon-us"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="language">
                        <div className="dropdown-item">
                            <span className="flag-icon flag-icon-fr"></span>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-es"></i>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-us"></i>
                        </div>
                        <div className="dropdown-item">
                            <i className="flag-icon flag-icon-it"></i>
                        </div>
                    </div>
                </div>
                <div className="user-area dropdown float-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <img className="user-avatar rounded-circle"
                            src={`${BASE_DOWNLOAD_URL}${data?.image}`} alt="User Avatar"
                            style={{ width: 60, height: 60, borderRadius: 30 }}
                        />
                    </a>

                    <div className="user-menu dropdown-menu">
                        <div style={{ cursor: 'pointer' }} onClick={() => handleClick("profile")}><i className="fa fa-user"></i> Tài khoản</div>

                        <div style={{ cursor: 'pointer' }}
                            onClick={() => {
                                localStorage.removeItem("token")
                                localStorage.removeItem("page")
                                localStorage.removeItem("roleId")
                                window.location.reload();
                            }}
                        ><i className="fa fa-power-off"></i> Đăng xuất</div>
                    </div>
                </div>


            </div>
        </div>
    </header>
}