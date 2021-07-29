export default function Building() {
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Building</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li className="active">Building</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fuild emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                alt="HangNT" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head" style={{ verticalAlign: 'middle' }}>
                            <br /><br />
                            <h5>
                                Nguyen Thuy Hang
                            </h5><br />
                            <h6>
                                Admin
                            </h6>
                            <br />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <label>User Id</label>
                            </div>
                            <div className="col-md-6">
                                <p>Kshiti123</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6">
                                <p>Kshiti Ghelani</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Email</label>
                            </div>
                            <div className="col-md-6">
                                <p>kshitighelani@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                                <p>123 456 7890</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Profession</label>
                            </div>
                            <div className="col-md-6">
                                <p>Web Developer and Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
}