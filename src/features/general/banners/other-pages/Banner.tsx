import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React, { ComponentProps } from "react"
import CustomIcon from "../../../../layouts/reusables/icons/CustomIcon"
import { Link } from "react-router-dom"

type BannerProps = { pageTitle: string } & ComponentProps<"div">

function Banner(props: BannerProps) {
  return (
    <div className="bg-center bg-cover bg-[url('/images/general/banner/background.jpg')] bg-opacity-10 h-[200px] flex flex-row justify-center items-end">
      <div className="flex justify-between justify-self-center bg-white items-center py-1 w-full mx-4 lg:mx-20 xl:mx-80 px-4 -mb-6 rounded shadow max-w-7xl">
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
          <p className="text-theme_secondary font-theme_secondary_bold text-sm">
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
  )
}

export default Banner
