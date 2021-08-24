import React, { useEffect, useState } from 'react';
import API from '../../../lib/API';
import { Pie } from 'react-chartjs-2';
export default function TypeApartmentAccount() {
    const [labels, setLabels] = useState();
    const [data, setData] = useState();
    const [colors, setColors] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let path = '/manager-service/dashboard/typeApartmentAccount';
        let resp = await API.authorizedJSONGET(path);
        if (resp.ok) {
            let response = await resp.json();
            let respLabels = [];
            let respDatas = [];
            let respColors = [];
            for (let i = 0; i < response?.length; i++) {
                respLabels.push(response[i]?.type)
                respColors.push(response[i]?.color)
                respDatas.push(response[i]?.total)
            }
            setLabels(respLabels)
            setColors(respColors)
            setData(respDatas)

        }
    }
    const pies = {
        labels: labels,
        datasets: [
            {
                label: 'Cư dân ở loại căn hộ theo m2 ',
                data: data,
                backgroundColor: colors,

                borderWidth: 1,

            },
        ],
    }


    return (
        <>

            {(labels && colors && data) &&
                <Pie data={pies}
                    width={"30%"}
                    options={{ maintainAspectRatio: false }}
                />
            }
        </>
    )
}