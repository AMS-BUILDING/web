import React, { useState } from 'react';
import ModalDetailService from './ModalDetailService';
export default function ServiceItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <tr>
                <td>1</td>
                <td>Giải trí</td>
                <td>BBQ</td>
                <td>
                    <svg style={{ width: 25, height: 25, backgroundColor: '#308e3a', color: 'white', padding: 3, borderRadius: 3, cursor: 'pointer' }} viewBox="0 0 24 24"
                        onClick={handleShow}
                    >
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg>
                </td>

            </tr>
            <ModalDetailService
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
        </>
    )
}