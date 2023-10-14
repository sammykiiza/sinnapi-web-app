import React from "react"
import { Link } from "react-router-dom"
import { TopEventsVendorsCardProps } from "../../utils/types"
import CustomIcon from "./icons/CustomIcon"

function TopEventsVendorsCard(props: TopEventsVendorsCardProps) {
  return (
    <Link to={"/"}>
      <div className="rounded">
        <div className="group flex flex-col">
          <img
            src={new URL(`${props.imageUrl}`, import.meta.url).href}
            alt=""
            className="object-cover w-full rounded-t h-44 group-hover:opacity-80 ease-in-out duration-75"
          />
          <div className="invisible group-hover:visible self-center absolute mt-20 text-theme_primary text-xs opacity-80 font-theme_secondary_bold bg-white rounded-full px-2 py-1 ease-in-out duration-75">
            View Details
          </div>
        </div>
        <div className="bg-gray-300 rounded-b py-6 pl-4">
          <CustomIcon
            type={props.iconName}
            className="text-2xl sm:text-3xl text-white bg-theme_secondary p-3 rounded-full max-[374px]:ml-20 max-[424px]:text-xl max-[424px]:-mt-10 max-[424px]:ml-24 max-[300px]:hidden absolute ml-28 lg:ml-32 -mt-10"
          />
          <p className="font-theme_secondary_bold text-sm">
            {props.vendorCategory}
          </p>
          <p className="font-theme_secondary_light text-xs">
            {props.vendorLocation}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default TopEventsVendorsCard
