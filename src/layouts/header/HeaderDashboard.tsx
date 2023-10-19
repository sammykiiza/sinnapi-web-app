import { useEffect, useRef, useState } from "react"
import ReactSelect from "react-select"
import logo from "/images/header/logo/sinnapi.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo"
import { Link, useLocation } from "react-router-dom"
import SideBarMobile from "../sidebars/SideBarMobile"
import { vendorCategoriesSelectData } from "../../utils/data"
import CustomIcon from "../reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import SideBarDashboardMobile from "../sidebars/dashboards/SideBarDashboardMobile"

function HeaderDashboard() {
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

  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const location = useLocation().pathname
  const checkDashboardPath = (): boolean => {
    return location.includes("/customer") || location.includes("/vendor")
  }
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: React.MouseEvent & React.TouchEvent) => {
      if (!ref.current?.contains(e.target as unknown as any)) {
        setIsDropDownOpen(false)
      }
    }

    document.addEventListener("mousedown", handler as unknown as any)
  })
  return (
    <div className="bg-theme_primary py-4">
      <div className="container grid grid-rows-2 grid-cols-12 px-2 lg:grid-rows-1 xl:gap-x-2 items-center max-w-6xl mx-auto">
        <div className="pl-2 xl:pl-0 lg:row-start-1 col-span-2 md:col-span-1 flex flex-row justify-between items-center space-x">
          <div
            className={(checkDashboardPath() ? "lg:hidden" : "") + " xl:hidden"}
          >
            {checkDashboardPath() ? (
              <SideBarDashboardMobile />
            ) : (
              <SideBarMobile />
            )}
          </div>
          <Link to={"/"} className="">
            <img
              src={logo}
              alt="sinnapi"
              className="max-w-[150%] xl:max-w-[100%]"
            />
          </Link>
        </div>
        <div className="col-span-12 xl:col-start-2 xl:col-span-9 row-start-2 xl:row-start-1 xl:justify-self-center mb-2 xl:ml-4 xl:mb-0 flex flex-row w-full">
          <div className="w-full">
            <ReactSelect
              options={vendorCategoriesSelectData}
              placeholder={
                screenWidth <= 1024 ? "Category" : "Choose Vendor Category"
              }
              isSearchable={true}
              className={"w-full text-xs text-gray-300"}
              classNamePrefix={"select-categories"}
              name="vendor-category"
            />
          </div>
          <div className="flex flex-row w-full">
            <ReactSelect
              options={vendorCategoriesSelectData}
              placeholder={
                screenWidth <= 1024 ? "Location" : "Choose Vendor Location"
              }
              isSearchable={true}
              className={"w-full text-xs text-gray-300"}
              classNamePrefix={"select-location"}
              name="location"
            />
            <button className="bg-theme_secondary text-xs xl:text-sm text-white rounded-r px-4 whitespace-nowrap font-semibold font-theme_secondary_light">
              Search Now
            </button>
          </div>
        </div>
        <div className="col-start-12 justify-self-end flex flex-row lg:space-x-2">
          <div className="relative">
            <button
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              className="flex flex-row space-x-2 items-center lg:bg-theme_secondary rounded py-2 px-2 text-white"
            >
              <FontAwesomeIcon icon={faUser} className="text-xs" />
              <div className="hidden lg:flex flex-row items-center space-x-1">
                <span className="text-sm">Account</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </div>
            </button>
            <div
              className={
                isDropDownOpen
                  ? "block absolute -right-6 z-50 w-28 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  : "hidden"
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
              ref={ref}
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
                    onClick={() => setIsDropDownOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
                <div className="p-1">
                  <Link
                    to={"/vendor-signup"}
                    className="text-gray-700 hover:text-white block px-4 py-2 text-xs hover:bg-theme_secondary rounded"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                    onClick={() => setIsDropDownOpen(false)}
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
                    to={"/customer-signup"}
                    className="text-gray-700 hover:text-white block px-4 py-2 text-xs hover:bg-theme_secondary rounded"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                    onClick={() => setIsDropDownOpen(false)}
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
            </div>
          </div>
          <Link
            to={"/contact-us"}
            className="flex flex-row items-center justify-center lg:bg-theme_secondary hover:bg-theme_secondary rounded px-2 space-x-1 text-white"
          >
            <FontAwesomeIcon icon={faCircleInfo} />
            <span className="text-xs hidden lg:inline">Help</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderDashboard
