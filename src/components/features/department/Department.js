import { useState } from "react";
import Item from "./Item";
import ModalAddAddress from "./ModalAddAddress";
export default function Department() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <div className="add">
            <button onClick={handleShow}>
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>
        </div>
        <ModalAddAddress
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        />

        <div className="main__table">
            <table>
                <tr>

                    <th>Số thứ tự</th>
                    <th>Tòa</th>
                    <th>Số phòng</th>
                    <th>Tên chủ hộ</th>
                    <th></th>
                </tr>

                <Item />
                <Item />
                <Item />

            </table>
        </div>
        {/* <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Department Manager</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li className="active">Department</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content mt-3" style={{ paddingLeft: '0px' }}>
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="content mt-3" style={{ marginTop: '150px' }}>
                                    <div className="row mt-3 mb-3">
                                        <div className="row" style={{ padding: '0px', margin: '0px' }}>
                                            <div className="form-group" style={{ marginRight: '10px', marginLeft: '10px' }}>
                                                <label htmlFor="departmentName">Department Name:</label><br />
                                                <input id="departmentName" name="departmentName" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group" style={{ marginRight: '30px' }}>
                                                <label htmlFor="departmentManger">Department Manager:</label><br />
                                                <input name="departmentManger" id="departmentManger" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group" style={{ marginRight: '10px', paddingTop: '4px' }}>
                                                <br />
                                                <button type="submit" className="button-search-number"><img src="images/search.png" alt="" /></button>
                                            </div>
                                            <div className="btn-add" style={{ paddingTop: '25px' }}>
                                                <button type="button" className="btn btn-success collapsed">
                                                    Export Excel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row f-end" style={{ padding: '0px', margin: '0px' }}>
                                        <div className="btn-add">
                                            <button type="button" className="btn btn-success collapsed" data-toggle="modal" data-target="#add-department" aria-expanded="false" aria-controls="collapse">
                                                Add New Department
                                            </button>
                                        </div>
                                    </div>
                                    <Table />
                                    <Paging />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="modal fade" id="add-department" tabindex="-1" role="dialog" aria-labelledby="add-department-title"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-lg">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add-department-title">New Department</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label> Name:</label>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" value="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Manager:</label>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" value="" />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="detail-department" tabindex="-1" role="dialog" aria-labelledby="detail-department-title"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-lg">
                    <div className="modal-header">
                        <h5 className="modal-title" id="detail-department-title">Detail Department</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label> Name:</label>
                            </div>
                            <div className="col-sm-8">
                                <label> Security</label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Manager:</label>
                            </div>
                            <div className="col-sm-8">
                                <label> Do Van Loi</label>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="update-department" tabindex="-1" role="dialog" aria-labelledby="update-department-title"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-lg">
                    <div className="modal-header">
                        <h5 className="modal-title" id="update-department-title">Update Department</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label> Name:</label>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" value="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Manager:</label>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" value="" />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="remove-department" tabindex="-1" role="dialog" aria-labelledby="remove-department-title"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="remove-department-title">Delete Department</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you must remove department ?
            </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Yes</button>
                        <button type="button" className="btn btn-warning">No</button>
                    </div>
                </div>
            </div>
        </div>
     */}
    </>
}