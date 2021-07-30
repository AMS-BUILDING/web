import React from 'react';
export default function InforProfile({ data }) {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <label style={{ color: 'black', marginTop: 0 }}>User Id</label>
                </div>
                <div className="col-md-6">
                    <p style={{ color: 'black' }}>{data?.id}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label style={{ color: 'black', marginTop: 0 }}>Name</label>
                </div>
                <div className="col-md-6">
                    <p style={{ color: 'black' }}>{data?.name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label style={{ color: 'black', marginTop: 0 }}>Email</label>
                </div>
                <div className="col-md-6">
                    <p style={{ color: 'black' }}>{data?.email}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label style={{ color: 'black', marginTop: 0 }}>Phone</label>
                </div>
                <div className="col-md-6">
                    <p style={{ color: 'black' }}>{data?.phone}</p>
                </div>
            </div>
        </>
    )
}