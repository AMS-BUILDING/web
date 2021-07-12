import React from 'react';
export default function Item(){
    return(
        <>
            <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>A1</td>
                <td>A102</td>
                <td>Sua chua</td>
                <td>Hoan thanh</td>

                <td>
                    <svg style={{ width: 24, height: 24, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                       
                    >
                        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg>
                    <svg style={{ width: 24, height: 24, cursor: 'pointer', marginRight: 10 }} viewBox="0 0 24 24"
                        
                    >
                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                    <svg style={{ width: 24, height: 24, cursor: 'pointer' }} viewBox="0 0 24 24"
                  
                    >
                        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </td>

            </tr>
        </>
    )
}