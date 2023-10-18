import { Fragment } from "react"
import { OverlayProvider, usePreventScroll } from "react-aria"
import SlideOver from "./SlideOver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import CategoriesMenu from "../../features/general/home/CategoriesMenu"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setIsOpen } from "./sideBarsSlice"

function SideBarMobile() {
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
          <CategoriesMenu />
        </SlideOver>
      </OverlayProvider>
    </Fragment>
  )
}

export default SideBarMobile
