import React from "react"
import { Link } from "react-router-dom"
import CustomIcon from "./icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import RatingComponent from "./RatingComponent"
import { TopEventsLisitingsCardProps } from "../../utils/types"

function TopEventsListingsCard(props: TopEventsLisitingsCardProps) {
  return (
    <Link to={"/"}>
      <div className="rounded">
        <div className="group">
          <div className="flex flex-row font-theme_secondary_light justify-between items-center px-1 absolute transition-all ease-in duration-200 group-hover:space-x-0 lg:space-x-4 mt-2">
            <span className="bg-white space-x-2 py-1 px-1 hidden transition-all ease-in duration-200 group-hover:hidden lg:flex items-center rounded-full">
              <CustomIcon
                type={"faStar" as unknown as IconDefinition}
                className="text-white bg-theme_primary rounded-full p-1 text-[0.5rem]"
              />
              <span className="text-[0.6rem]">Featured</span>
            </span>
            <span className="bg-white space-x-2 py-1 px-1 flex items-center rounded-full">
              <CustomIcon
                type={"faTag" as unknown as IconDefinition}
                className="text-white bg-theme_primary transition-all ease-in duration-200 group-hover:bg-theme_secondary rounded-full p-1 text-[0.6rem]"
              />
              <span className="text-[0.6rem] whitespace-nowrap">
                UGX(120M-300M)
              </span>
            </span>
          </div>
          <img
            src={props.imageUrl}
            alt=""
            className="object-cover w-full rounded-t h-52 ease-in-out duration-75"
          />
          <div className="flex flex-row justify-between items-center px-2 -mt-8">
            <span className="font-theme_secondary_bold uppercase text-white transition-all ease-in duration-200 bg-theme_primary group-hover:bg-theme_secondary px-3 py-[0.2rem] text-[0.5rem] rounded-full">
              {props.vendorCategory}
            </span>
            <CustomIcon
              type={"faHeart" as unknown as IconDefinition}
              className="text-white bg-theme_primary transition-all ease-in duration-200 group-hover:bg-theme_secondary p-2 rounded-full text-[0.6rem]"
            />
          </div>
        </div>
        <div className="bg-gray-200 rounded-b py-6 divide-y divide-gray-300">
          <div className="pl-2 pb-4">
            <div className="flex flex-row justify-between items-center pr-2">
              <p className="font-theme_secondary_bold text-sm">
                {props.vendorName}
              </p>
              <CustomIcon
                type={"faCheck" as unknown as IconDefinition}
                className="bg-theme_secondary text-white text-[0.6rem] rounded-full p-[0.1rem]"
              />
            </div>
            <div className="flex flex-row items-center space-x-1 pt-2">
              <CustomIcon
                type={"faLocationDot" as unknown as IconDefinition}
                className="text-theme_secondary text-[0.6rem] rounded-full p-[0.1rem]"
              />
              <p className="font-theme_secondary_light text-gray-700 text-[0.65rem]">
                {props.vendorLocation}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center pl-2 pt-2">
            <div>
              <RatingComponent />
            </div>
            <span className="font-theme_secondary_light text-[0.65rem] text-gray-700">
              ({props.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TopEventsListingsCard
