import { Link } from "react-router-dom";

export default function LeftPanel() {
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
                        <li className="active">
                            <Link to="/home"> <i className="menu-icon fa fa-laptop"></i>Biểu đồ </Link>
                        </li>
                        <li className="active">
                            <Link to="/isstay"> <i className="menu-icon fa fa-laptop"></i>Tạm trú - tạm vắng</Link>
                        </li>
                        <li className="active">
                            <Link to="/home"> <i className="menu-icon fa fa-laptop"></i>Nhắn tin</Link>
                        </li>
                        <li className="active">
                            <Link to="/employee"> <i className="menu-icon fa fa-laptop"></i>Nhân viên</Link>
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý dịch vụ </h3>
                        <li className="menu-item dropdown">
                            <Link to="/service"> <i className="menu-icon fa fa-table"></i>Dịch vụ</Link>

                        </li>
                        <li className="menu-item dropdown">
                            <Link to="/request-service"> <i className="menu-icon fa fa-table"></i>Yêu cầu dịch vụ</Link>

                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý cư dân</h3>
                        <li className="menu-item ">
                            <Link to="/department"> <i className="menu-icon fa fa-laptop"></i>Căn hộ
                            </Link>
                        </li>
                        <li className="menu-item ">
                            <Link to="/resident"> <i className="menu-icon fa fa-table"></i>Cư dân</Link>
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý tài chính</h3>
                        <li className="menu-item ">
                            <Link to="/fee-building"> <i className="menu-icon fa fa-laptop"></i>Phí tòa nhà
                            </Link>
                        </li>
                        <li className="menu-item ">
                            <Link to="/fee-department"> <i className="menu-icon fa fa-table"></i>Phi căn hộ</Link>
                        </li>

                    </>
                    <>
                        <h3 className="menu-title">Thẻ</h3>
                        <li className="menu-item ">
                            <Link to="/card-parking"> <i className="menu-icon fa fa-laptop"></i>Thẻ gửi xe
                            </Link>
                        </li>
                        <li className="menu-item ">
                            <Link to="/card-department"> <i className="menu-icon fa fa-table"></i>Thẻ căn hộ</Link>
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Thông báo</h3>
                        <li className="menu-item ">
                            <Link to="/notification"> <i className="menu-icon fa fa-laptop"></i>Thông báo
                            </Link>
                        </li>
                        <li className="menu-item ">
                            <Link to="/feedback"> <i className="menu-icon fa fa-table"></i>Phản hồi</Link>
                        </li>
                    </>

                </ul>
            </div>
        </nav>
    </aside>
}