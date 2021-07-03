export default function Table() {
    return (
        <>
            <table id="bootstrap-data-table-export" className="table table-striped table-bordered" style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Department Name</th>
                        <th>Deparment Manager</th>
                        <th className="w-action-3">Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Security Department</td>
                        <td>Do Van Loi</td>
                        <td style={{ textAlign: 'center' }}>
                            <div className="container">
                                <a href="#" className="view mr-1" data-target="#detail-department" title="Quick Detail" data-toggle="modal">
                                    <i className="fas fa-eye fa-fw" />
                                </a>
                                <a href="#" className="edit mr-1" data-toggle="modal" data-target="#update-department" title="Update">
                                    <i className="fas fa-pen fa-fw" /></a>
                                <a href="#" className="remove mr-1" data-toggle="modal" data-target="#remove-department" title="Remove">
                                    <i className="fas fa-trash fa-fw" /></a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Serivce Department</td>
                        <td>Tran Van Kha</td>
                        <td style={{ textAlign: 'center' }}>
                            <div className="container">
                                <a href="#" className="view mr-1" data-target="#detail" title="Quick Detail">
                                    <i className="fas fa-eye fa-fw" />
                                </a>
                                <a href="#" data-target="#" className="edit mr-1" data-toggle="modal" title="Update">
                                    <i className="fas fa-pen fa-fw" /></a>
                                <a href="#" data-target="#" className="remove mr-1" data-toggle="modal" title="Remove">
                                    <i className="fas fa-trash fa-fw" /></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}