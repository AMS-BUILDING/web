import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import API from '../../../lib/API';
import Item from "./Item";
import ModalAdd from "./ModalAdd";
import style from './resident.module.css';

export default function Resident({ roomName, handleRoomName }) {
    const apartmentId = localStorage.getItem("apartmentId")
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    let [show, setShow] = useState(false);
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

            <ModalAdd show={show} handleShow={handleShow} handleClose={handleClose} apartmentId={apartmentId} search={search} />

        </div>
        <div className={style.wrapSearch}>
            <input
                placeholder="Tên"
                value={name}
                onChange={e => setName(e.target.value)}
                className={style.ipSearch}
            />
            <input
                placeholder="Số phòng"
                value={roomName}
                onChange={e => handleRoomName(e.target.value)}
                className={style.ipSearch}
            />
            <input
                placeholder="Số điện thoại"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={style.ipSearch}
            />
            <button
                onClick={() => {
                    search()
                    setActivePage(1)
                }}
                className={style.btnSearch}><svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg></button>
            {apartmentId && <button onClick={() => setShow(true)} className={style.btnAdd}>Thêm cư dân</button>}

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