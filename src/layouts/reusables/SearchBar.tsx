import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { ComponentProps } from "react"
import CustomIcon from "./icons/CustomIcon"

function SearchBar(props: ComponentProps<"div">) {
  return (
    <div
      className={
        props.className + " relative text-gray-600 flex flex-row items-center"
      }
    >
      <CustomIcon
        type={"faSearch" as unknown as IconDefinition}
        className="absolute ml-4 text-sm text-gray-600"
      />
      <input
        className="w-full border-2 border-gray-300 bg-white h-10 px-8 rounded-lg text-sm focus:outline-none focus:ring-0 focus:border-gray-300"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
