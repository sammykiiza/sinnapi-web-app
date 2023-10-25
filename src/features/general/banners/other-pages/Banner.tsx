import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React, { ComponentProps } from "react"
import CustomIcon from "../../../../layouts/reusables/icons/CustomIcon"
import { Link } from "react-router-dom"

type BannerProps = { pageTitle: string } & ComponentProps<"div">

function Banner(props: BannerProps) {
  return (
    <div className="bg-center bg-cover bg-[url('/images/general/banner/background.jpg')] bg-opacity-10 h-[200px]">
      <div className="flex flex-col justify-end items-center mx-auto h-full px-2 xl:px-32 max-w-7xl">
        <h1 className="flex w-full text-white text-3xl font-theme_secondary_bold items-start justify-self-center mb-12 capitalize">
          {props.pageTitle}
        </h1>
        <div className="flex justify-between justify-self-center bg-white items-center py-1 w-full px-4 -mb-6 rounded shadow-lg">
          <div className="flex space-x-2 items-center">
            <Link to={"/"}>
              <CustomIcon
                type={"faHome" as unknown as IconDefinition}
                className="text-theme_black text-sm"
              />
            </Link>
            <CustomIcon
              type={"faChevronRight" as unknown as IconDefinition}
              className="text-gray-400 text-xs"
            />
            <p className="text-theme_secondary font-theme_secondary_bold text-sm capitalize">
              {props.pageTitle}
            </p>
          </div>
          <div>
            <CustomIcon
              type={"faAppleWhole" as unknown as IconDefinition}
              className="text-theme_secondary text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
