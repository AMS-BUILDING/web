import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ModalAddSumbit from './ModalAddSumbit';
import { useForm } from "react-hook-form";
import API from '../../../lib/API';
import PersonDepend from './PersonDepend';

export default function ModalAddDepend({ showDepend, handleCloseDepend, handleShowDepend, handleShowAdd, ownPerson, apartmentId, blockId, floorId, search }) {
    const [showSumbit, setShowSumbit] = useState(false);
    let [position, setPosition] = useState([]);

    const handleCloseSumbit = () => setShowSumbit(false);
    const handleShowSumbit = () => setShowSumbit(true);
    let [depend, setDepend] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    let [person, setPerson] = useState([{
        name: null
    }])
    let addEvent = async () => {
        await setPerson([...person,
        { name: null }
        ])


    }
    let minusEvent = () => {
        let arr = [...person];
        arr.pop()
        setPerson(arr)

    }

    let handleDepend = (data, index) => {
        depend[index] = data;
        setDepend(depend)
    }

    let fetchData = async () => {
        let path = `/manager-service/position/search?show=true`;

        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setPosition(response);
        }
    }
    return (
        <>
            <Modal show={showDepend} onHide={() => {
                handleCloseDepend()
                handleShowAdd()
            }} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm thông tin người phụ thuộc</Modal.Title>
                </Modal.Header>
                {person?.map((item, index) => {
                    return (
                        <>
                            <PersonDepend addEvent={addEvent} minusEvent={minusEvent} index={index} length={person?.length}
                                ownPerson={ownPerson} apartmentId={apartmentId}
                                handleDepend={handleDepend}
                                depend={depend}
                                handleCloseDepend={handleCloseDepend}
                                handleShowSumbit={handleShowSumbit}
                                handleCloseDepend={handleCloseDepend}
                                handleShowAdd={handleShowAdd}
                            />
                        </>
                    )
                })}
                {person.length == 0 &&
                    <Modal.Footer>

                        <Button variant="success"
                            onClick={() => {
                                handleCloseDepend()
                                handleShowSumbit()
                            }}
                        >
                            Tiếp
                        </Button>
                        <Button variant="secondary"
                            onClick={() => {
                                handleCloseDepend()
                                handleShowAdd()
                            }}

                        >
                            Quay lại
                        </Button>
                    </Modal.Footer>
                }


            </Modal>
            <ModalAddSumbit
                show={showSumbit}
                handleClose={handleCloseDepend}
                handleCloseSumbit={handleCloseSumbit}
                handleShow={handleShowDepend}
                depend={depend}
                ownPerson={ownPerson}
                apartmentId={apartmentId}
                blockId={blockId}
                floorId={floorId}
                search={search}
            />
        </>
    )
}
