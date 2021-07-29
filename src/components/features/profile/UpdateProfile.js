import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import API from '../../../lib/API';

export default function UpdateProfile({ data, search }) {
    const [user, setUser] = useState(data);
    const [filePath, setFilePath] = useState();
    const { control, reset, handleSubmit, formState: { errors }, register } = useForm();


    let submitHandler = async (form) => {
        console.log(form)
        const res = new FormData();
        res.append("name", form?.name);
        res.append("phone", form?.phone);
        res.append("multipartFile", form?.multipartFile);
        res.append("identifyCard", form?.identifyCard);
        res.append("currentAddress", form?.currentAddress);
        res.append("homeTown", form?.homeTown);
        let path = `/tenant/update/profile`;
        let response = await API.authorizedFilePost(path, res);
        if (response.ok) {
            console.log("ok")
            search()
            
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <ul className="menu">
                <li className="menu__item">
                    <div className="menu__item--title">Tên:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            name: e.target.value
                                        })
                                    }}
                                    value={user?.name}
                                />

                            )}
                            name="name"
                            defaultValue={user?.name}
                        />
                    </div>
                </li>

                <li className="menu__item">
                    <div className="menu__item--title">Ngày sinh:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    type="date"
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            dob: e.target.value
                                        })
                                    }}
                                    value={user?.dob}
                                />

                            )}
                            name="dob"
                            defaultValue={user?.dob}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Số điện thoại:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            phone: e.target.value
                                        })

                                    }}
                                    value={user?.phone}
                                />

                            )}
                            name="phone"
                            defaultValue={user?.phone}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Số chứng minh thư:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            identifyCard: e.target.value
                                        })
                                    }}
                                    value={user?.identifyCard}
                                />

                            )}
                            name="identifyCard"
                            defaultValue={user?.identifyCard}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Nơi ở hiện tại:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            currentAddress: e.target.value
                                        })
                                    }}
                                    value={user?.currentAddress}
                                />

                            )}
                            name="currentAddress"
                            defaultValue={user?.currentAddress}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Quê quán:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setUser({
                                            ...user,
                                            homeTown: e.target.value
                                        })
                                    }}
                                    value={user?.homeTown}
                                />

                            )}
                            name="homeTown"
                            defaultValue={user?.homeTown}
                        />
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item--title">Avatar:</div>
                    <div className="menu__item--input">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    onBlur={onBlur}
                                    type="file"
                                    className=""
                                    onChange={e => {
                                        onChange(e.target.files[0])
                                        setUser({
                                            ...user,
                                            multipartFile: e.target.files[0]
                                        })
                                        setFilePath(URL.createObjectURL(e.target.files[0]));
                                    }}

                                />

                            )}
                            name="multipartFile"
                            defaultValue={user?.image}
                        />
                    </div>
                    {filePath ? (
                        <div>
                            <img
                                id="target"
                                src={filePath}
                                style={{ width: 300, height: 200, objectFit: "cover" }}
                                alt=""
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </li>


            </ul>
            <button variant="success" onClick={handleSubmit(submitHandler)}>
                Xác nhận
            </button>
        </>
    )
}