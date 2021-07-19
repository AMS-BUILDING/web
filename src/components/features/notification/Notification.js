import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import Item from './Item';
import ModalAdd from './ModalAdd';
import Pagination from 'react-js-pagination';
import ModalMessage from '../modal/ModalMessage';

export default function Notification() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1)


    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const handleCloseMessage = () => {
        setShowMessage(false)
    }
    const handleShowMessage = () => {
        setShowMessage(true)
    }
    const handleMessage = (text) => {
        setMessage(text)
    }


    useEffect(() => {
        search()
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        search()
    }, [activePage])

    let search = async () => {
        let path = `/tenant/notification/search?pageNo=${activePage - 1}`;
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                        <div className="page-title">
                            <h1>Thông báo</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                        <div className="page-title">
                            <ol className="breadcrumb text-right">
                                <li className="active">Thông báo</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add">
                <button onClick={handleShow}>
                    Thêm thông báo
                </button>
            </div>
            <ModalAdd
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleMessage={handleMessage}
                handleShowMessage={handleShowMessage}
            />
            <ModalMessage message={message} showMessage={showMessage} handleCloseMessage={handleCloseMessage} search={search} />
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
                            No data
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
    )
}