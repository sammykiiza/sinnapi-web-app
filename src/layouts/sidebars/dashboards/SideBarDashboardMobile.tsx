import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Fragment, useState } from "react"
import { usePreventScroll, OverlayProvider } from "react-aria"
import SlideOver from "../SlideOver"
import SideBarDashboard from "./SideBarDashboard"

function SideBarDashboardMobile() {
  const [isOpen, setIsOpen] = useState(false)

  usePreventScroll({ isDisabled: !isOpen })
  return (
    <Fragment>
      <FontAwesomeIcon
        className={isOpen ? "hidden" : "block text-white text-xl"}
        icon={faBars}
        onClick={() => setIsOpen(true)}
      />
      <OverlayProvider>
        <SlideOver
          title="Sinnapi"
          isOpen={isOpen}
          dashboard={true}
          onClose={() => setIsOpen(false)}
        >
          <SideBarDashboard />
        </SlideOver>
      </OverlayProvider>
    </Fragment>
  )
}

export default SideBarDashboardMobile
