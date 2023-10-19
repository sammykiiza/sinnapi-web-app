import React from "react"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-4 lg:px-2 xl:px-20 mb-10 w-full">
        <div className="lg:rounded relative shadow-xl">
          <img
            src="/images/vendor/dashboard/banner.jpg"
            alt="vendor-dashboard-banner"
            className="object-cover object-center w-full h-64 -mb-8 lg:rounded"
          />
          <div className="flex flex-row justify-between items-center px-2 xl:px-8 py-4 rounded-b bg-white">
            <div className="flex flex-row items-center gap-x-2 xl:ml-5">
              <img
                src="/images/vendor/dashboard/banner-mini.jpg"
                alt="vendor-banner-mini"
                className="object-cover object-center w-20 h-20 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-theme_secondary_bold text-sm">
                  Upload Brand Image
                </p>
                <p className="font-theme_secondary_light text-xs text-gray-400">
                  Best image size 250 x 250
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-1 cursor-pointer rounded-md border px-3 py-2 border-gray-300 text-theme_secondary hover:text-theme_primary text-sm">
              <CustomIcon type={"faPenToSquare" as unknown as IconDefinition} />
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              89
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">Your Review</h1>
              <Link
                to={"/vendor/reviews"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              12
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">
                Listed Items
              </h1>
              <Link
                to={"/vendor/listings"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              29
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">
                Profile Views
              </h1>
              <Link
                to={"/vendor/profile"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                Vendors hired
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md drop-shadow-xl divide-y-2">
          <div className="flex flex-row justify-between p-4">
            <h3 className="font-theme_secondary_bold text-theme_secondary">
              Your Listings
            </h3>
            <Link
              to={"/vendor/listings"}
              className="text-xs hover:text-theme_secondary"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col divide-y-2">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-2 items-center py-6 px-4">
              <div className="row-span-2 md:row-span-1 col-span-1 rounded-lg">
                <img
                  src="/images/vendor/listings/listing-1.jpg"
                  alt="listing"
                  className="object-center object-cover rounded-lg md:aspect-video md:h-28"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <p className="font-theme_secondary_bold text-sm">
                  Muliika Events Photography
                </p>
                <p className="font-theme_secondary_light text-gray-400 text-xs">
                  Kampala
                </p>
              </div>
              <div className="col-span-1 flex flex-col font-theme_secondary_light text-xs text-gray-400">
                <span>Date Added</span>
                <span className="border rounded-md text-xs pl-1 md:mr-6">
                  January 18, 2023
                </span>
              </div>
              <div className="col-span-1 flex flex-col md:justify-self-center font-theme_secondary_light text-xs text-gray-400">
                <span>Status</span>
                <span className="border border-amber-300 rounded text-amber-300 px-2">
                  Pending
                </span>
              </div>
              <div className="md:justify-self-center flex flex-col text-xs text-gray-400">
                <span>Action</span>
                <CustomIcon
                  type={"faEllipsis" as unknown as IconDefinition}
                  className="border border-gray-500 hover:border-theme_secondary rounded cursor-pointer hover:text-theme_secondary text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-2 items-center py-6 px-4">
              <div className="row-span-2 md:row-span-1 col-span-1 rounded-lg">
                <img
                  src="/images/vendor/listings/listing-2.jpg"
                  alt="listing"
                  className="object-center object-cover rounded-lg md:aspect-video md:h-28"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <p className="font-theme_secondary_bold text-sm">
                  KML Car Hire Services
                </p>
                <p className="font-theme_secondary_light text-gray-400 text-xs">
                  Fort Portal
                </p>
              </div>
              <div className="col-span-1 flex flex-col font-theme_secondary_light text-xs text-gray-400">
                <span>Date Added</span>
                <span className="border rounded-md text-xs pl-1 md:mr-6">
                  March 20, 2023
                </span>
              </div>
              <div className="col-span-1 flex flex-col md:justify-self-center font-theme_secondary_light text-xs text-gray-400">
                <span>Status</span>
                <span className="border border-green-400 rounded text-green-400 px-2">
                  Publish
                </span>
              </div>
              <div className="md:justify-self-center flex flex-col text-xs text-gray-400">
                <span>Action</span>
                <CustomIcon
                  type={"faEllipsis" as unknown as IconDefinition}
                  className="border border-gray-500 hover:border-theme_secondary rounded cursor-pointer hover:text-theme_secondary text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-2 items-center py-6 px-4">
              <div className="row-span-2 md:row-span-1 col-span-1 rounded-lg">
                <img
                  src="/images/vendor/listings/listing-3.jpg"
                  alt="listing"
                  className="object-center object-cover rounded-lg md:aspect-video md:h-28"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <p className="font-theme_secondary_bold text-sm">
                  Kavumba Recreation
                </p>
                <p className="font-theme_secondary_light text-gray-400 text-xs">
                  Wakiso
                </p>
              </div>
              <div className="col-span-1 flex flex-col font-theme_secondary_light text-xs text-gray-400">
                <span>Date Added</span>
                <span className="border rounded-md text-xs pl-1 md:mr-6">
                  April 15, 2023
                </span>
              </div>
              <div className="col-span-1 flex flex-col md:justify-self-center font-theme_secondary_light text-xs text-gray-400">
                <span>Status</span>
                <span className="border border-gray-400 rounded text-gray-40border-gray-400 px-2">
                  Draft
                </span>
              </div>
              <div className="md:justify-self-center flex flex-col text-xs text-gray-400">
                <span>Action</span>
                <CustomIcon
                  type={"faEllipsis" as unknown as IconDefinition}
                  className="border border-gray-500 hover:border-theme_secondary rounded cursor-pointer hover:text-theme_secondary text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
