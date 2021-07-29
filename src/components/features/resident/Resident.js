import Paging from "../../common/Paging";
import Table from "../../common/Table";
import Item from "./Item";
import Pagination from "react-js-pagination";
import API from '../../../lib/API';
import { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";

export default function Resident({ roomName, handleRoomName }) {
    const apartmentId = localStorage.getItem("apartmentId")
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    let [show,setShow] = useState(false);
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    let [name, setName] = useState("");

    const [phone, setPhone] = useState("");
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [activePage])
    let search = async () => {
        let path = `/admin/apartment/search/resident?pageNo=${activePage - 1}&name=${name}&roomNumber=${roomName}&phone=${phone}`;
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
                        <h1>Cư dân</h1>
                    </div>
                </div>
            </div>
            {apartmentId && <button onClick={() => setShow(true)}>Them cu dan</button>}
            <ModalAdd show={show} handleShow={handleShow} handleClose={handleClose} apartmentId={apartmentId}  search={search} />
            <div className="col-sm-8">
                <input
                    placeholder="Tên"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="Số phòng"
                    value={roomName}
                    onChange={e => handleRoomName(e.target.value)}
                />
                <input
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <button
                    onClick={() => {
                        search()
                        setActivePage(1)
                    }}
                >Search</button>
            </div>
        </div>



        <div className="main__table">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Số phòng</th>
                    <th>Chức năng</th>

                </tr>
                {data?.totalElement > 0 ?
                    data?.data?.map((item, idx) => {
                        return (
                            <Item data={item} key={idx} index={parseInt(5 * (activePage - 1) + idx + 1)} search={search} />
                        )
                    }) :
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
    </>


}