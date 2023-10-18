import React from "react"
import { Link } from "react-router-dom"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

function Dashboard() {
  return (
    <div className="flex flex-col justify-center space-y-4 lg:px-20 w-full">
      <div className="lg:rounded bg-white shadow-xl">
        <img
          src="/images/customer/dashboard/banner.jpg"
          alt="customer-dashboard-banner"
          className="object-cover object-center w-full h-64 lg:rounded"
        />
        <div className="flex flex-row justify-center px-2 py-10 gap-x-4 md:gap-x-12">
          <div className="flex flex-row gap-x-2">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              0
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">Out of 21</h1>
              <p className="text-gray-200 text-xs">Vendors hired</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <h1 className="bg-gray-200 px-3 rounded py-2 text-theme_secondary text-2xl">
              0
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">Out of 81</h1>
              <p className="text-gray-300 text-xs">Favourite vendors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 px-3 lg:rounded bg-white shadow-xl font-theme_secondary_light">
        <div className="flex flex-col">
          <h1 className="text-gray-200 text-xs">0 of 21 categories hired</h1>
          <h1 className="text-theme_secondary font-theme_secondary_bold text-base md:text-lg">
            Your Vendor team
          </h1>
        </div>
        <Link
          to={"/"}
          className="flex flex-row text-theme_black hover:text-theme_secondary text-xs gap-x-2 md:gap-x-4 justify-between items-end"
        >
          <div>View all my vendors</div>
          <div>
            <CustomIcon type={"faChevronRight" as unknown as IconDefinition} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-2 gap-y-2 md:px-14 gap-x-2">
        <input
          type="search"
          name="search-vendors-customer"
          className="bg-white shadow-lg border-none focus:ring-0 focus:outline-none rounded w-full h-10 placeholder:text-gray-500 placeholder:text-xs px-5"
          placeholder="Start your search"
        />
        <div className="flex flex-row drop-shadow-2xl w-full">
          <input
            type="search"
            name="search-vendors-location-customer"
            className="bg-white border-none focus:ring-0 focus:outline-none rounded-md w-full h-10 placeholder:text-gray-500 placeholder:text-xs px-5"
            placeholder="Where"
          />
          <button
            type="submit"
            className="text-white text-sm font-theme_secondary_bold bg-theme_secondary px-2 py-1 rounded rounded-l-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white shadow-xl">
        <div className="relative rounded-md grid">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end m-1 p-1 rounded-md cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-white items-center gap-y-2 cursor-pointer">
            <CustomIcon type={"faLocationDot" as unknown as IconDefinition} />
            <p className="text-sm">Venue</p>
          </div>
          <img
            src="/images/customer/dashboard/venues.jpg"
            alt="venues"
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
        <div className="relative rounded-md grid bg-teal-100">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end hidden rounded-md m-1 p-1 cursor-pointer"
          />
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end rounded m-0.5 p-1 cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-teal-400 items-center gap-y-2 cursor-pointer">
            <CustomIcon type={"faUser" as unknown as IconDefinition} />
            <p className="text-theme_black">MC</p>
          </div>
          <img
            src=""
            alt=""
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
        <div className="relative rounded-md grid bg-teal-100">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end hidden rounded-md m-1 p-1 cursor-pointer"
          />
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end rounded m-0.5 p-1 cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-teal-400 items-center gap-y-2 cursor-pointer">
            <CustomIcon type={"faVideo" as unknown as IconDefinition} />
            <p className="text-theme_black">Videographer</p>
          </div>
          <img
            src=""
            alt=""
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
        <div className="relative rounded-md grid bg-teal-100">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end hidden rounded-md m-1 p-1 cursor-pointer"
          />
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end rounded m-0.5 p-1 cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-teal-400 items-center gap-y-2 cursor-pointer">
            <CustomIcon
              type={"faEnvelopeOpenText" as unknown as IconDefinition}
            />
            <p className="text-theme_black">Music</p>
          </div>
          <img
            src=""
            alt=""
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
        <div className="relative rounded-md grid bg-teal-100">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end hidden rounded-md m-1 p-1 cursor-pointer"
          />
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end rounded m-0.5 p-1 cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-teal-400 items-center gap-y-2 cursor-pointer">
            <CustomIcon type={"faGift" as unknown as IconDefinition} />
            <p className="text-theme_black">Photography</p>
          </div>
          <img
            src=""
            alt=""
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
        <div className="relative rounded-md grid bg-teal-100">
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end hidden rounded-md m-1 p-1 cursor-pointer"
          />
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-theme_black justify-self-end rounded m-0.5 p-1 cursor-pointer"
          />
          <div className="absolute place-self-center flex flex-col text-teal-400 items-center gap-y-2 cursor-pointer">
            <CustomIcon type={"faCakeCandles" as unknown as IconDefinition} />
            <p className="text-theme_black">Cake</p>
          </div>
          <img
            src=""
            alt=""
            className="object-cover object-center rounded-md aspect-video"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
