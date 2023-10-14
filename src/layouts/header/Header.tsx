import { useEffect, useState } from "react"
import ReactSelect from "react-select"
import logo from "/images/header/logo/sinnapi.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo"
import { Link } from "react-router-dom"
import SideBarMobile from "../sidebars/SideBarMobile"
import { AnimatePresence, motion } from "framer-motion"
import { vendorCategoriesSelectData } from "../../utils/data"
import CustomIcon from "../reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateScreenWidth)
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])

  const variants = {
    close: {
      opacity: 0,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      scale: 1,
    },
  }
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  return (
    <AnimatePresence>
      <div className="h-28 bg-theme_primary">
        <div className=" grid grid-rows-2 grid-cols-12 content-center justify-items-center lg:px-10 max-w-7xl mx-auto">
          <div className="col-start-2 lg:col-start-auto col-span-2 md:col-span-1 self-center lg:my-3 md:max-lg:space-x-10">
            <div className="absolute left-0 m-2 xl:hidden">
              <SideBarMobile />
            </div>
            <Link to={"/"}>
              <img src={logo} alt="sinnapi" />
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-9 row-start-2 lg:row-start-auto justify-self-center self-center px-10 lg:px-0 mx-auto lg:ml-10 flex flex-row w-full justify-center">
            <ReactSelect
              options={vendorCategoriesSelectData}
              placeholder={
                screenWidth <= 1024 ? "Category" : "Choose Vendor Category"
              }
              isSearchable={true}
              className={"w-full lg:w-[60%] xl:w-[70%] text-xs text-gray-300"}
              classNamePrefix={"select-categories"}
              name="vendor-category"
            />
            <div className="flex flex-row w-full">
              <ReactSelect
                options={vendorCategoriesSelectData}
                placeholder={
                  screenWidth <= 1024 ? "Location" : "Choose Vendor Location"
                }
                isSearchable={true}
                className={"w-full lg:w-[60%] xl:w-[70%] text-xs text-gray-300"}
                classNamePrefix={"select-location"}
                name="location"
              />
              <button className="bg-theme_secondary text-xs xl:text-sm text-white rounded-r px-4 font-semibold font-theme_secondary_light">
                Search Now
              </button>
            </div>
          </div>
          <div className="col-start-10 lg:col-start-auto col-span-2 self-center flex flex-row lg:space-x-4">
            <div className="relative">
              <button
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                className="flex flex-row space-x-3 items-center lg:bg-theme_secondary rounded py-2 px-2 text-white"
              >
                <FontAwesomeIcon icon={faUser} />
                <div className="hidden lg:flex flex-row items-center space-x-1">
                  <span className="text-sm">Account</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </div>
              </button>
              <motion.div
                className="absolute -right-6 z-10 w-28 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
                animate={isDropDownOpen ? "open" : "close"}
                variants={variants}
              >
                <div
                  className="py-1 divide-y-2 divide-gray-200 font-theme_secondary_bold"
                  role="none"
                >
                  <div className="p-1">
                    <Link
                      to={"/login"}
                      className="text-gray-700 hover:text-white block px-4 py-2 text-center uppercase text-xs hover:bg-theme_secondary rounded"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="p-1">
                    <Link
                      to={"/"}
                      className="text-gray-700 hover:text-white block px-4 py-2 text-xs hover:bg-theme_secondary rounded"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      <CustomIcon
                        type={"faUser" as unknown as IconDefinition}
                        className="text-xs px-1 -ml-4"
                      />
                      Vendor
                    </Link>
                  </div>
                  <div className="p-1">
                    <Link
                      to={"/"}
                      className="text-gray-700 hover:text-white block px-4 py-2 text-xs hover:bg-theme_secondary rounded"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      <CustomIcon
                        type={"faUser" as unknown as IconDefinition}
                        className="text-xs px-1 -ml-4"
                      />
                      Customer
                    </Link>
                  </div>
                  <form method="POST" action="#" role="none" className="hidden">
                    <button
                      type="submit"
                      className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
            <Link
              to={"/contact-us"}
              className="flex flex-row items-center justify-center lg:bg-theme_secondary hover:bg-theme_secondary rounded px-2 space-x-4 text-white"
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              <span className="text-sm hidden lg:inline">Help</span>
            </Link>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Header
