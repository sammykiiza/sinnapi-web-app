import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import { Link } from "react-router-dom"
import CustomIcon from "../../reusables/icons/CustomIcon"

function SideBarDashboard() {
  return (
    <div className="w-60 space-y-4 flex flex-col justify-center items-center">
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
      <div className="shadow-lg bg-white p-8 rounded-md flex flex-col space-y-4">
        <div>
          <Link to={"/customer"} className="flex flex-row space-x-3">
            <div>
              <CustomIcon
                type={"faGauge" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm hover:text-theme_secondary">Dashboard</div>
          </Link>
        </div>
        <div>
          <Link to={"/customer"} className="flex flex-row space-x-3">
            <div>
              <CustomIcon
                type={"faBook" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm hover:text-theme_secondary">
              Vendor Manager
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/customer"} className="flex flex-row space-x-3">
            <div>
              <CustomIcon
                type={"faUser" as unknown as IconDefinition}
                className="text-theme_secondary text-lg"
              />
            </div>
            <div className="text-sm hover:text-theme_secondary">My Profile</div>
          </Link>
        </div>
        <div>
          <Link
            to={"/customer"}
            className="flex flex-row space-x-3 text-red-600"
          >
            <div>
              <CustomIcon
                type={"faPowerOff" as unknown as IconDefinition}
                className="text-lg"
              />
            </div>
            <div>Logout</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBarDashboard
