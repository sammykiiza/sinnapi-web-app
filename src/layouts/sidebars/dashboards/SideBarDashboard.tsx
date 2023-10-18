import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import CustomIcon from "../../reusables/icons/CustomIcon"
import { useAppDispatch } from "../../../app/hooks"
import { setDashboard, setIsOpen } from "../sideBarsSlice"

function SideBarDashboard() {
  const dispatch = useAppDispatch()
  dispatch(setDashboard(true))
  const currentUrl = useLocation().pathname
  return (
    <div className="w-full lg:w-60 space-y-4 flex flex-col items-center">
      <div className="space-y-2">
        <div className="w-20 mx-auto">
          <img
            src="/images/customer/dashboard/profile.jpg"
            alt="profile"
            className="rounded-[100%] object-cover object-center"
          />
        </div>
        <div className="text-theme_secondary font-theme_secondary_bold">
          Kato Charles
        </div>
      </div>
      <div className="lg:shadow-lg bg-white p-8 rounded-md flex flex-col space-y-4">
        <div>
          <Link
            to={"/customer"}
            className={
              (currentUrl === "/customer" ? "text-theme_secondary" : "") +
              ` flex flex-row space-x-3 hover:text-theme_secondary`
            }
            onClick={() => dispatch(setIsOpen(false))}
          >
            <div>
              <CustomIcon
                type={"faGauge" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm ">Dashboard</div>
          </Link>
        </div>
        <div>
          <Link
            to={"/customer/vendor-manager"}
            className={
              (currentUrl === "/customer/vendor-manager"
                ? "text-theme_secondary"
                : "") + " flex flex-row space-x-3 hover:text-theme_secondary"
            }
            onClick={() => dispatch(setIsOpen(false))}
          >
            <div>
              <CustomIcon
                type={"faBook" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm ">Vendor Manager</div>
          </Link>
        </div>
        <div>
          <Link
            to={"/customer/profile"}
            className={
              (currentUrl === "/customer/profile"
                ? "text-theme_secondary"
                : "") + " flex flex-row space-x-3 hover:text-theme_secondary"
            }
            onClick={() => dispatch(setIsOpen(false))}
          >
            <div>
              <CustomIcon
                type={"faUser" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm">My Profile</div>
          </Link>
        </div>
        <div>
          <form className="flex flex-row space-x-3 text-red-600 hover:text-theme_primary cursor-pointer">
            <div>
              <CustomIcon
                type={"faPowerOff" as unknown as IconDefinition}
                className="text-lg"
              />
            </div>
            <div>Logout</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SideBarDashboard
