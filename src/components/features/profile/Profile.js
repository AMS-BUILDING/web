import React, { useState, useEffect } from 'react';
import API from '../../../lib/API';
import ChangePassword from './ChangePassWord';
import InforProfile from './InforProfile';
import UpdateProfile from './UpdateProfile';
export default function Profile() {
    const [data, setData] = useState();
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();
    useEffect(() => {
        search()
    }, []);
    const search = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response);
            setUser(response)
        }
    }

    const [tab, setTab] = useState("infor")


    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>

        </div>

        <div className="container-fuild emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={data?.image ? `http://localhost:8080/download?image=${data?.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"}
                                alt="HangNT" />
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head" style={{ verticalAlign: "middle" }}>
                            <br /><br />
                            <h5>
                                {data?.name}
                            </h5><br />
                            <h6>
                                {data?.roleId == 1 ? "Admin" : "Service"}
                            </h6>
                            <br />

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" onClick={() => setTab("infor")} style={{ padding: 10, cursor: 'pointer', color: tab == "infor" && "red" }}>
                                    Chi tiết
                                </li>
                                <li className="nav-item" onClick={() => setTab("update")} style={{ padding: 10, cursor: 'pointer', color: tab == "update" && "blue" }}>
                                    Sửa đổi
                                </li>
                                <li className="nav-item" onClick={() => setTab("change")} style={{ padding: 10, cursor: 'pointer', color: tab == "change" && "green" }}>
                                    Thay đổi Password
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                        </div>
                    </div>
                    <div className="col-md-8">
                        {tab == "infor" && <InforProfile data={data} />}
                        {tab == "update" && <UpdateProfile data={data} search={search} />}
                        {tab == "change" && <ChangePassword data={data} search={search} />}

                    </div>
                </div>
            </form>
        </div>
    </>
}