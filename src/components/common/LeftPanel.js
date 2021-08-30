import { useDispatch, useSelector } from "react-redux";
import { setPageRedux } from '../../redux/PageSlice';

export default function LeftPanel({ roleId, handleRoomName }) {
    let dispatch = useDispatch()
    let page = useSelector(state => state.page);
    const handleClass = (currentPage) => {
        if (page === currentPage) {
            return `menu-item menu-item__active`
        } else {
            return `menu-item`
        }
    }

    let handleClick = (item) => {
        dispatch(setPageRedux(JSON.parse(JSON.stringify(item))))
        localStorage.removeItem("apartmentId")
    }
    return <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default navbar navbar-inverse">

            <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu"
                    aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo" /></a>
                <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
            </div>

            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <>

                        <li className={handleClass("home")} onClick={() => {
                            handleClick("home")
                        }}>
                            <i class="menu-icon fas fa-chart-line"></i>Biểu đồ
                        </li>

                        {roleId == 1 && <>
                            <li className={handleClass("isstay")} onClick={() => {
                                handleClick("isstay")
                            }}>
                                <i class="menu-icon fas fa-file-signature"></i>Tạm trú - tạm vắng
                            </li>
                        </>}

                        <li className={handleClass("employee")} onClick={() => {
                            handleClick("employee")
                        }}>
                            <i class="menu-icon fas fa-user-tie"></i>Nhân viên
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý dịch vụ </h3>
                        <li className={handleClass("service")} onClick={() => {
                            handleClick("service")
                        }}>
                            <i class="menu-icon fas fa-boxes"></i>Dịch vụ

                        </li>
                        <li className={handleClass("request-service")} onClick={() => {
                            handleClick("request-service")
                        }}>
                            <i class="menu-icon fas fa-hand-holding-usd"></i>Yêu cầu dịch vụ

                        </li>
                    </>

                    {roleId == 1 &&

                        <>
                            <>
                                <h3 className="menu-title">Quản lý cư dân</h3>
                                <li className={handleClass("department")} onClick={() => {
                                    handleClick("department")
                                }}>
                                    <i class="menu-icon fas fa-building"></i>Căn hộ

                                </li>
                                <li className={handleClass("resident")} onClick={() => {
                                    handleClick("resident")
                                    handleRoomName("")
                                    localStorage.removeItem("status")
                                }}>
                                    <i class="menu-icon fas fa-users"></i>Cư dân
                                </li>
                            </>

                            <>
                                <h3 className="menu-title">Quản lý tài chính</h3>

                                <li className={handleClass("fee-department")} onClick={() => {
                                    handleClick("fee-department")
                                }}>
                                    <i class="menu-icon fas fa-wallet"></i>Phí căn hộ
                                </li>

                            </>
                        </>
                    }


                    <h3 className="menu-title">Thẻ</h3>
                    <li className={handleClass("card-parking")} onClick={() => {
                        handleClick("card-parking")
                    }}>
                        <i class="menu-icon fas fa-id-card"></i>Thẻ gửi xe

                    </li>



                    <>
                        <h3 className="menu-title">Thông báo</h3>
                        <li className={handleClass("notification")} onClick={() => {
                            handleClick("notification")
                        }}>
                            <i class="menu-icon fas fa-globe-europe"></i>Thông báo

                        </li>
                        {roleId == 1 && <li className={handleClass("feedback")} onClick={() => {
                            handleClick("feedback")
                        }}>
                            <i class="menu-icon fas fa-mail-bulk"></i>Phản hồi
                        </li>}

                    </>

                </ul>
            </div>
        </nav>
    </aside>
}