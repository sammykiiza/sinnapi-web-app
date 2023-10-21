import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import CustomIcon from "../../reusables/icons/CustomIcon"
import { useAppDispatch } from "../../../app/hooks"
import { setDashboard, setIsOpen } from "../sideBarsSlice"

function SideBarDashboard() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setDashboard(true))
  })
  const userTypeLocaStorage = localStorage.getItem("userType")
  const userType = userTypeLocaStorage ? userTypeLocaStorage : "customer"
  const currentUrl = useLocation().pathname
  return (
    <div className={"w-full lg:w-60 space-y-4 flex flex-col items-center"}>
      <div className="space-y-2">
        <div className="w-20 mx-auto">
          <img
            src={
              userType === "customer"
                ? "/images/customer/dashboard/profile.jpg"
                : "/images/vendor/dashboard/profile.jpg"
            }
            alt="profile"
            className="rounded-[100%] object-cover object-center"
          />
        </div>
        <div
          className={
            (userType === "customer"
              ? "text-theme_secondary"
              : userType === "vendor"
              ? "text-theme_primary"
              : "") + " font-theme_secondary_bold"
          }
        >
          {userType === "customer" ? "Kato Charles" : "Welcome vendor"}
        </div>
      </div>
      <div className="lg:shadow-lg bg-white p-8 rounded-md font-theme_secondary_bold flex flex-col space-y-4">
        <div>
          <Link
            to={
              userType === "customer"
                ? "/customer"
                : userType === "vendor"
                ? "/vendor"
                : "/customer"
            }
            className={
              (currentUrl === "/customer" || currentUrl === "/vendor"
                ? "text-theme_secondary"
                : "") + ` flex flex-row space-x-3 hover:text-theme_secondary`
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
        {userType === "customer" && (
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
        )}
        {userType === "vendor" && (
          <div>
            <Link
              to={"/vendor/listings"}
              className={
                (currentUrl === "/vendor/listings"
                  ? "text-theme_secondary"
                  : "") + " flex flex-row space-x-3 hover:text-theme_secondary"
              }
              onClick={() => dispatch(setIsOpen(false))}
            >
              <div>
                <CustomIcon
                  type={"faRectangleList" as unknown as IconDefinition}
                  className="text-theme_secondary text-lg"
                />
              </div>
              <div className="text-sm ">My Listing</div>
            </Link>
          </div>
        )}
        <div>
          <Link
            to={
              userType === "customer"
                ? "/customer/profile"
                : userType === "vendor"
                ? "/vendor/profile"
                : "/customer/profile"
            }
            className={
              (currentUrl === "/customer/profile" ||
              currentUrl === "/vendor/profile"
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
        {userType === "vendor" && (
          <div>
            <Link
              to={"/vendor/reviews"}
              className={
                (currentUrl === "/vendor/reviews"
                  ? "text-theme_secondary"
                  : "") + " flex flex-row space-x-3 hover:text-theme_secondary"
              }
              onClick={() => dispatch(setIsOpen(false))}
            >
              <div>
                <CustomIcon
                  type={"faStar" as unknown as IconDefinition}
                  className="text-theme_secondary text-lg"
                />
              </div>
              <div className="text-sm">Reviews</div>
            </Link>
          </div>
        )}
        <div>
          <Link
            to={"/"}
            onClick={() => {
              localStorage.removeItem("loggedIn")
            }}
            className="flex flex-row space-x-3 text-red-600 hover:text-theme_primary cursor-pointer"
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
