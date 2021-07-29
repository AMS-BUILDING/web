import React from 'react';
export default function InforProfile({data}) {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <label>User Id</label>
                </div>
                <div className="col-md-6">
                    <p>{data?.id}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Name</label>
                </div>
                <div className="col-md-6">
                    <p>{data?.name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Email</label>
                </div>
                <div className="col-md-6">
                    <p>{data?.email}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Phone</label>
                </div>
                <div className="col-md-6">
                    <p>{data?.phone}</p>
                </div>
            </div>
        </>
    )
}