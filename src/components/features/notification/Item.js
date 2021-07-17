import moment from 'moment';
import React from 'react';
export default function Item({index,data}){
    return(
        <>
            <tr>
                <td>{index}</td>
                <td>{data?.title}</td>
                <td>{data?.description}</td>
                {/* <td>{moment(new Date(Date.now())).format("DD/MM/YYYY")}</td> */}
        
            </tr>
        </>
    )
}