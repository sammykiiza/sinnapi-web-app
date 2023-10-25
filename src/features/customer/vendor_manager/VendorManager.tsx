import { Link } from "react-router-dom"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import BadgeCircular from "../../../layouts/reusables/BadgeCircular"
import { clientVendorManagerVendorsData } from "../../../utils/data"
import VendorManagerVendorCard from "../../../layouts/reusables/VendorManagerVendorCard"

function VendorManager() {
  return (
    <div className="space-y-10 px-2 lg:px-32 mb-10">
      <h1 className="text-3xl py-2 lg:py-0 px-2 lg:px-0 text-theme_primary font-theme_secondary_bold">
        Vendor Manager
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-8">
        <div className="col-span-1 flex flex-col bg-gray-50 font-theme_secondary_light justify-evenly gap-y-4 rounded-md shadow-xl">
          <div className="flex flex-col divide-y-2 bg-white font-theme_secondary_bold text-xs">
            <div>
              <Link
                to={"/"}
                className="flex flex-row items-center py-4 px-4 hover:text-theme_secondary space-x-3"
              >
                <div>
                  <CustomIcon
                    type={"faLocationDot" as unknown as IconDefinition}
                    className="text-theme_secondary text-xl"
                  />
                </div>
                <div>Wedding Gowns</div>
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex flex-row items-center py-4 px-4 hover:text-theme_secondary space-x-3"
              >
                <div>
                  <CustomIcon
                    type={"faCamera" as unknown as IconDefinition}
                    className="text-theme_secondary text-xl"
                  />
                </div>
                <div>Photography</div>
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex flex-row items-center py-4 px-4 hover:text-theme_secondary space-x-3"
              >
                <div>
                  <CustomIcon
                    type={"faCakeCandles" as unknown as IconDefinition}
                    className="text-theme_secondary text-xl"
                  />
                </div>
                <div>Cakes</div>
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex flex-row items-center py-4 px-4 hover:text-theme_secondary space-x-3"
              >
                <div>
                  <CustomIcon
                    type={"faMusic" as unknown as IconDefinition}
                    className="text-theme_secondary text-xl"
                  />
                </div>
                <div>Music Systems</div>
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex flex-row items-center py-4 px-4 hover:text-theme_secondary space-x-3"
              >
                <div>
                  <CustomIcon
                    type={"faCar" as unknown as IconDefinition}
                    className="text-theme_secondary text-xl"
                  />
                </div>
                <div>Car Hire Services</div>
              </Link>
            </div>
          </div>
          <div className="space-y-2 px-4">
            <span className="font-theme_secondary_bold text-sm">View By</span>
            <div className="flex flex-col gap-y-2 items-start">
              <div className="flex flex-row justify-between items-center rounded-full text-xs border border-gray-400 space-x-3 px-2 py-1 cursor-pointer hover:text-theme_secondary hover:border-theme_secondary">
                <span className="text-gray-500 hover:text-theme_secondary">
                  Venue
                </span>
                <CustomIcon
                  type={"faX" as unknown as IconDefinition}
                  className="text-xs"
                />
              </div>
              <div className="flex flex-row justify-between items-center rounded-full text-xs border border-gray-400 space-x-3 px-2 py-1 cursor-pointer hover:text-theme_secondary hover:border-theme_secondary">
                <span className="text-gray-500 hover:text-theme_secondary">
                  Unavailable
                </span>
                <CustomIcon
                  type={"faX" as unknown as IconDefinition}
                  className="text-xs"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 px-4 pb-4">
            <span className="font-theme_secondary_bold text-sm">Status</span>
            <div className="flex flex-col justify-evenly gap-y-2 text-sm">
              <div className="flex flex-row justify-between items-center">
                <div className="flex gap-x-1 items-center">
                  <BadgeCircular className="bg-red-600" />
                  <span>Unavailable</span>
                </div>
                <div>1</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex gap-x-1 items-center">
                  <BadgeCircular className="bg-red-600" />
                  <span>Not a Good Fit</span>
                </div>
                <div>2</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex gap-x-1 items-center">
                  <BadgeCircular className="bg-amber-600" />
                  <span>Evaluating</span>
                </div>
                <div>1</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex gap-x-1 items-center">
                  <BadgeCircular className="bg-green-600" />
                  <span>Hired</span>
                </div>
                <div>1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:ml-2 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-4 md:gap-x-6">
          {clientVendorManagerVendorsData.map((vendor, i) => (
            <VendorManagerVendorCard data={vendor} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VendorManager
