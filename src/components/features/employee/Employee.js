import { useEffect, useState } from "react";
import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
import ModalAdd from "./ModalAdd";
import API from '../../../lib/API';
import Pagination from "react-js-pagination";
import Search from "./Search";

export default function Employee() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activePage, setActivePage] = useState(1);
    let [name, setName] = useState("");
    let [identifyCard, setIdentifyCard] = useState("");
    const [phone, setPhone] = useState("");
    const [positionId, setPositionId] = useState(-1);
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [activePage])
    let search = async () => {
        let path = `/manager-service/employee/search?pageNo=${activePage - 1}&name=${name}&phoneNumber=${phone}&identifyCard=${identifyCard}&positionId=${positionId}`;
        console.log("a")
        let resp = await API.authorizedJSONGET(path);
        if (resp.status === 200) {
            let response = await resp.json();
            setData(response);
        }

    }
    const handlePositionId = (id) => {
        setPositionId(id)
    }
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Nhân viên</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-10">
                <input
                    placeholder="Ten nhan vien"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="So dien thoai"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <input
                    placeholder="So CCCD"
                    value={identifyCard}
                    onChange={e => setIdentifyCard(e.target.value)}
                />
                <Search positionId={positionId} handlePositionId={handlePositionId} />
                <button onClick={() => {
                    search()
                    setActivePage(1)
                }}>Tim kiem</button>
            </div>

        </div>
        <div className="add">
            <button onClick={handleShow}>Thêm Nhân Viên</button>
        </div>


        <div className="main__table">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Vị trí</th>
                    <th>Chức năng</th>

                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, idx) => {
                        return (
                            <Item data={item} key={idx} index={parseInt(5 * (activePage - 1) + idx + 1)} search={search} />
                        )
                    }) :
                    <>
                        <div>
                            No data
                        </div>
                    </>
                }
            </table>
        </div>
        {data?.totalElement > 0 ?
            <div className="wrapper-paginate">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={parseInt(data?.totalElement)}
                    pageRangeDisplayed={3}
                    onChange={(item) => setActivePage(item)}
                />
            </div> : <></>
        }


        <ModalAdd
            show={show}
            handleClose={handleClose}
        />
    </>
}