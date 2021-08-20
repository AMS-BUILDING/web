import React, { useState } from 'react';
import API from '../../../lib/API';
import { Pie } from 'react-chartjs-2';
export default function TypeApartmentAccount() {
    const [data, setData] = useState();
    const search = async () => {
        let path = '/manager-service/dashboard/typeApartmentAccount';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    const pies = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Cư dân ở loại căn hộ theo m2 ',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,

            },
        ],
    }


    return (
        <>
            <Pie data={pies}
                width={"30%"}
                options={{ maintainAspectRatio: false }}
            />
        </>
    )
}