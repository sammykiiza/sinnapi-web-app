import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { selectBoxCategories } from "../../utils/data"
import RatingComponent from "./RatingComponent"
import SelectBox from "./SelectBox"
import CustomIcon from "./icons/CustomIcon"

function VendorManagerVendorCard({ data }: { data: any }) {
  return (
    <div className="flex flex-col space-y-4 rounded-md shadow-xl bg-white font-theme_secondary_light">
      <div className="">
        <img
          src={data.imageUrl}
          alt="event"
          className="object-cover object-center aspect-video rounded-md"
        />
        <div className="absolute -mt-8 ml-1 flex flex-row items-center justify-center bg-white py-0.5 rounded-full">
          <RatingComponent className="py-0" />
          <span className="text-xs">2662</span>
        </div>
      </div>
      <div className="flex flex-col px-1">
        <h1 className="font-theme_secondary_bold text-sm">{data.vendorName}</h1>
        <div className="flex items-center text-gray-400 text-xs gap-x-1">
          <CustomIcon
            type={"faLocationDot" as unknown as IconDefinition}
            className=""
          />
          <span className="capitalize">{data.vendorLocation}</span>
        </div>
      </div>
      <div className="px-2">
        <SelectBox
          data={selectBoxCategories}
          placeHolderLargeScreen="Evaluating"
          placeHolderSmallScreen="Evaluating"
          classNamePrefix="vendor-manager"
          className="text-xs"
        />
      </div>
      <div className="grid grid-cols-4 items-center px-2 text-sm">
        <div className="col-span-2 flex flex-col space-y-3">
          <span className="text-gray-400">Overall fit</span>
          <div className="flex flex-row gap-x-1">
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-theme_secondary cursor-pointer"
            />
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-theme_secondary cursor-pointer"
            />
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-theme_secondary cursor-pointer"
            />
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-theme_secondary cursor-pointer"
            />
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-theme_secondary cursor-pointer"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col space-y-2">
          <span className="self-end text-gray-400 px-1">Price</span>
          <div className="grid grid-rows-1 grid-cols-4 items-center gap-x-3">
            <div className="col-span-1 col-start-2 text-gray-400">UGX</div>
            <input
              type="number"
              name="price"
              defaultValue={0}
              className="col-span-2 h-7 rounded bg-gray-100 border-gray-400 text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>
      <div className="px-2 space-y-2">
        <label htmlFor="notes" className="text-sm capitalize text-gray-400">
          Notes
        </label>
        <textarea
          name="notes"
          id="notes"
          className="w-full rounded h-20 border-gray-400 bg-gray-100 text-gray-400 text-sm focus:border-gray-400 focus:outline-none focus:ring-0"
        ></textarea>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center py-2 md:py-0 px-2 text-xs font-theme_secondary_light">
        <a
          href="tel:+256 700 988931"
          className="flex flex-row items-center gap-x-2 text-theme_black hover:text-theme_secondary"
        >
          <CustomIcon
            type={"faPhone" as unknown as IconDefinition}
            className="text-theme_secondary"
          />
          <span>Phone Number</span>
        </a>
        <a
          href="mailto:info@sinnapi.com"
          className="flex flex-row items-center gap-x-2 text-theme_black hover:text-theme_secondary"
        >
          <CustomIcon
            type={"faEnvelope" as unknown as IconDefinition}
            className="text-theme_secondary"
          />
          <span>Contact</span>
        </a>
      </div>
    </div>
  )
}

export default VendorManagerVendorCard
