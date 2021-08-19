import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import Item from './Item';
import ModalAdd from './ModalAdd';
import Pagination from 'react-js-pagination';
import styles from './notification.module.css';

export default function Notification() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1)
    const [textSearch, setTextSearch] = useState("")



    useEffect(() => {
        search()
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        search()
    }, [activePage])
    let search = async () => {
        let path = `/tenant/notification/search?pageNo=${activePage - 1}&title=${textSearch}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }

    return (
        <>
            <div className="container-fluid">
                <h4 style={{ marginTop: 20, marginBottom: 20 }}>Thông báo</h4>
                <div className={styles.wrapContent}>
                    <div className={styles.wrapSearch}>
                        <input
                            type="text"
                            value={textSearch}
                            onChange={e => {
                                setTextSearch(e.target.value)
                            }}
                            className={styles.ipSearch}
                        />
                        <button onClick={() => {
                            search()
                            setActivePage(1)
                        }} className={styles.btnSearch}><svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                        </button>
                        <div >
                            <button onClick={handleShow} className={styles.btnAdd}>
                                Thêm thông báo
                            </button>
                        </div>
                    </div>

                    <ModalAdd
                        show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        search={search}
                    />
                    <div className="main__table">
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Tiêu đề</th>
                                <th>Mô tả</th>
                                {/* <th>Ngày</th> */}

                            </tr>
                            {data?.totalElement > 0 ?
                                data?.data?.map((item, index) => {
                                    return (
                                        <Item key={index} data={item} index={parseInt(5 * (activePage - 1) + index + 1)} />
                                    )
                                })
                                :
                                <>
                                    <tbody >
                                        <tr >
                                            <td colSpan="3">Không có dữ liệu</td>
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
                </div>
            </div>

        </>
    )
}