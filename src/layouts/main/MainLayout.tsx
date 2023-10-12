import Header from "../header/Header"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../footer/Footer"
import BottomFooter from "../footer/BottomFooter"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { showFooter } from "./mainLayoutSlice"

function MainLayout() {
  const showFooterVariable = useAppSelector(
    (state) => state.mainLayout.showFooter,
  )
  const dispatch = useAppDispatch()
  useLocation().pathname === "/listing-with-map"
    ? dispatch(showFooter(false))
    : dispatch(showFooter(true))

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* {!useLocation().pathname.match(/^\/listing-with-map.*$/gim) && <Footer />} */}
      {showFooterVariable && <Footer />}
      <BottomFooter />
    </div>
  )
}

export default MainLayout
