import { useEffect, useState } from "react";
import API from "../../../lib/API";
import Item from "./Item";
import ModalAddAddress from "./ModalAddAddress";
import ModalAddCard from "./ModalAddCard";
import Search from "./Search";
import Pagination from 'react-js-pagination';
import ResidentCard from "./resident-card/ResidentCard";

export default function Department({ handleRoomName }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showAdd, setShowAdd] = useState(false);
    let [householderName, setHouseHolderName] = useState("");
    let [roomName, setRoomName] = useState("");
    const [data, setData] = useState()
    let [activePage, setActivePage] = useState(1)
    const handleCloseAdd = () => setShowAdd(false);
    let [accountId, setAccountId] = useState();
    let handleAccountId = (id) => {
        setAccountId(id)
    }
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [activePage])
    let search = async () => {
        let path = `/admin/apartment/search?householderName=${householderName}&roomName=${roomName}&pageNo=${activePage - 1}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Căn hộ</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <input
                    placeholder="So phong"
                    value={roomName}
                    onChange={e => setRoomName(e.target.value)}
                />
                <input
                    placeholder="Ten chu ho"
                    value={householderName}
                    onChange={e => setHouseHolderName(e.target.value)}
                />
                <button
                    onClick={() => {
                        search();
                        setActivePage(1)
                    }}
                >Search</button>
            </div>
        </div>
        <div className="add">
            <button onClick={handleShow}>Thêm căn hộ</button>
        </div>
        <div className="add">
            <button onClick={() => {
                setShowAdd(true)
            }}>Thêm thẻ căn hộ</button>
        </div>
        <ModalAddAddress
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            search={search}
        />
        <ModalAddCard
            show={showAdd}
            handleCloseAdd={handleCloseAdd}
            search={search}
        />

        <div className="main__table">
            <table>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tên chủ hộ</th>
                    <th>Chức năng</th>

                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, index) => {
                        return (
                            <Item key={index} search={search} handleAccountId={handleAccountId} data={item} handleRoomName={handleRoomName} index={parseInt(5 * (activePage - 1) + index + 1)} />
                        )
                    })
                    :
                    <>
                        <tbody >
                            <tr >
                                <td colSpan="5">Không có dữ liệu</td>
                            </tr>
                        </tbody>
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

        <div>
        
        </div>
        {accountId && <ResidentCard accountId={accountId} />}

    </>
}