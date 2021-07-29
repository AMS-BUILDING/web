import { Link } from "react-router-dom";

export default function LeftPanel({ page, handlePage }) {

    const handleClass = (currentPage) => {
        if(page === currentPage){
            return `menu-item menu-item__active`
        }else{
            return `menu-item`
        }
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
                            handlePage("home")
                        }}>
                             <i className="menu-icon fa fa-laptop"></i>Biểu đồ 
                        </li>
                        <li className={handleClass("isstay")} onClick={() => {
                            handlePage("isstay")
                        }}>
                           <i className="menu-icon fa fa-laptop"></i>Tạm trú - tạm vắng
                        </li>
                        
                        <li className={handleClass("employee")} onClick={() => {
                            handlePage("employee")
                        }}>
                             <i className="menu-icon fa fa-laptop"></i>Nhân viên
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý dịch vụ </h3>
                        <li className={handleClass("service")} onClick={() => {
                            handlePage("service")
                        }}>
                           <i className="menu-icon fa fa-table"></i>Dịch vụ

                        </li>
                        <li className={handleClass("request-service")} onClick={() => {
                            handlePage("request-service")
                        }}>
                           <i className="menu-icon fa fa-table"></i>Yêu cầu dịch vụ

                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý cư dân</h3>
                        <li className={handleClass("department")} onClick={() => {
                            handlePage("department")
                        }}>
                             <i className="menu-icon fa fa-laptop"></i>Căn hộ
                           
                        </li>
                        <li className={handleClass("resident")} onClick={() => {
                            handlePage("resident")
                        }}>
                            <i className="menu-icon fa fa-table"></i>Cư dân
                        </li>
                    </>

                    <>
                        <h3 className="menu-title">Quản lý tài chính</h3>
                        
                        <li className={handleClass("fee-department")} onClick={() => {
                            handlePage("fee-department")
                        }}>
                             <i className="menu-icon fa fa-table"></i>Phi căn hộ
                        </li>

                    </>
                    <>
                        <h3 className="menu-title">Thẻ</h3>
                        <li className={handleClass("card-parking")} onClick={() => {
                            handlePage("card-parking")
                        }}>
                            <i className="menu-icon fa fa-laptop"></i>Thẻ gửi xe
                         
                        </li>
                        
                    </>

                    <>
                        <h3 className="menu-title">Thông báo</h3>
                        <li className={handleClass("notification")} onClick={() => {
                            handlePage("notification")
                        }}>
                            <i className="menu-icon fa fa-laptop"></i>Thông báo
                      
                        </li>
                        <li className={handleClass("feedback")} onClick={() => {
                            handlePage("feedback")
                        }}>
                            <i className="menu-icon fa fa-table"></i>Phản hồi
                        </li>
                    </>

                </ul>
            </div>
        </nav>
    </aside>
}