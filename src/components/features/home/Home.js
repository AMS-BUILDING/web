import DashboardNumber from "./DashboardNumber";
import TotalRevenue from './TotalRevenue';
import CountRequestService from './CountRequestService';
import MonthlyAccount from './MonthlyAccount';
import TypeApartmentAccount from './TypeApartmentAccount';
import MonthlyVehicle from './MonthlyVehicle';
import UseRequestService from './UseRequestService';
export default function Home() {
    return <>
        <div className="content" style={{ marginLeft: 15 }}>
            <h4 style={{ marginTop: 20, marginBottom: 20 }}>Dashboard</h4>
        </div>

        <div className="content mt-3">

            <DashboardNumber />

            <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }}>
                            <TotalRevenue />
                        </div>
                        <div className="col" style={{ marginBottom: 30 }} />
                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }}>
                            <CountRequestService />
                        </div>

                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }}>
                            <MonthlyAccount />
                        </div>
                        <div className="col" style={{ marginBottom: 30 }} />
                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }}>
                            <TypeApartmentAccount />
                        </div>

                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }}>
                            <MonthlyVehicle />

                        </div>
                        <div className="col" style={{ marginBottom: 30 }} />
                        <div className="col-lg-5" style={{ marginBottom: 30, backgroundColor: 'white' }} >
                            <UseRequestService />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}