export default function Home() {
    return <>
        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li className="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content mt-3">

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-1">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton1" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10000</span>
                        </h4>
                        <p className="text-light">Apartment</p>

                        <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                            <canvas id="widgetChart1" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-2">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton2" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">People in building</p>

                        <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                            <canvas id="widgetChart1" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-3">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton3" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10000</span>
                        </h4>
                        <p className="text-light">Employees</p>

                    </div>

                    <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                        <canvas id="widgetChart1" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-3">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button"
                                id="dropdownMenuButton4" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">5</span>
                        </h4>
                        <p className="text-light">Department</p>

                    </div>

                    <div className="chart-wrapper px-0" style={{ height: '70px' }} height={70}>
                        <canvas id="widgetChart1" />
                    </div>
                </div>
            </div>

            <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Yearly Sales </h4>
                                    <canvas id="sales-chart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Team Commits </h4>
                                    <canvas id="team-chart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Bar chart </h4>
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Rader chart </h4>
                                    <canvas id="radarChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Line Chart </h4>
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Doughut Chart </h4>
                                        <canvas id="doughutChart"></canvas>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Pie Chart </h4>
                                    <canvas id="pieChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Polar Chart </h4>
                                    <canvas id="polarChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-3">Single Bar Chart </h4>
                                    <canvas id="singelBarChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}