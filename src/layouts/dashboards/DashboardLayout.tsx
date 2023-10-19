import Header from "../header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import BottomFooter from "../footer/BottomFooter"
import SideBarDashboard from "../sidebars/dashboards/SideBarDashboard"
import { useAuth } from "../../services/auth/useAuth"

function DashboardLayout() {
  // useAuth()
  const userTypeLocaStorage = localStorage.getItem("userType")
  const userType = userTypeLocaStorage ? userTypeLocaStorage : "customer"
  return (
    <div
      className={
        userType === "customer" ? "dashboard-customer" : "dashboard-vendor"
      }
    >
      <Header />
      <div className="container grid grid-cols-1 lg:grid-cols-[auto,1fr] mx-auto lg:mt-[2%]">
        <div className="hidden lg:block">
          <SideBarDashboard />
        </div>
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
