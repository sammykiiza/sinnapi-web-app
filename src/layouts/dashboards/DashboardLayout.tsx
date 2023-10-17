import Header from "../header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import BottomFooter from "../footer/BottomFooter"
import SideBarDashboard from "../sidebars/dashboards/SideBarDashboard"

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Header />
      <div className="container grid grid-cols-[auto,1fr] mt-10">
        <SideBarDashboard />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default DashboardLayout
