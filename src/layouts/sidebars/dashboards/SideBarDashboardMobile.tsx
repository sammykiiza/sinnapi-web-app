import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fragment } from "react"
import { usePreventScroll, OverlayProvider } from "react-aria"
import SlideOver from "../SlideOver"
import SideBarDashboard from "./SideBarDashboard"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { setIsOpen } from "../sideBarsSlice"

function SideBarDashboardMobile() {
  const isOpen = useAppSelector((state) => state.sideBar.isOpen)
  const dashboard = useAppSelector((state) => state.sideBar.dashboard)
  const dispatch = useAppDispatch()

  usePreventScroll({ isDisabled: !isOpen })
  return (
    <Fragment>
      <FontAwesomeIcon
        className={isOpen ? "hidden" : "block text-white text-xl"}
        icon={faBars}
        onClick={() => dispatch(setIsOpen(true))}
      />
      <OverlayProvider>
        <SlideOver
          title="Sinnapi"
          isOpen={isOpen}
          dashboard={dashboard}
          onClose={() => dispatch(setIsOpen(false))}
        >
          <SideBarDashboard />
        </SlideOver>
      </OverlayProvider>
    </Fragment>
  )
}

export default SideBarDashboardMobile
