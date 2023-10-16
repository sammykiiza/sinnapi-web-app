import React, { Fragment, useState } from "react"
import { OverlayProvider, usePreventScroll } from "react-aria"
import SlideOver from "./SlideOver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import CategoriesMenu from "../../features/general/home/CategoriesMenu"

function SideBarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  usePreventScroll({ isDisabled: !isOpen })
  return (
    <Fragment>
      <FontAwesomeIcon
        className={isOpen ? "hidden" : "block text-white text-base"}
        icon={faBars}
        onClick={() => setIsOpen(true)}
      />
      <OverlayProvider>
        <SlideOver
          title="Sinnapi"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <CategoriesMenu />
        </SlideOver>
      </OverlayProvider>
    </Fragment>
  )
}

export default SideBarMobile
