import React from "react"
import Header from "../header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import BottomFooter from "../footer/BottomFooter"
// import SideBarMobile from "../sidebars/SideBarMobile"

function MainLayout() {
  return (
    <div>
      {/* Todo  
        Add Sidebar for mobile screens
      */}
      {/* <SideBarMobile /> */}
      <Header />
      {/* max-w-7xl mx-auto */}
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default MainLayout
