import Map from "../../../layouts/reusables/map/Map"
import {
  ratingSelectDropDown,
  vendorCategoriesSelectData,
} from "../../../utils/data"
import SelectBox from "../../../layouts/reusables/SelectBox"
import Slider from "../../../layouts/reusables/Slider"
import PaginatedItems from "../../../layouts/reusables/PaginatedItems"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from "react"

function ListingWithMap() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateScreenWidth)
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 w-full">
      <div className="xl:col-span-3">
        <div className="bg-gray-200 grid-rows-3 px-6 pb-20 pt-6">
          <div className="grid md:grid-cols-3 row-span-1 space-y-2 md:space-y-0 md:space-x-2">
            <SelectBox
              data={vendorCategoriesSelectData}
              name="listing-filter-select-category"
              placeHolderLargeScreen="Select Category"
              placeHolderSmallScreen="Category"
              classNamePrefix="select-listing-with-map"
            />
            <SelectBox
              data={vendorCategoriesSelectData}
              name="listing-filter-select-location"
              placeHolderLargeScreen="Select Location"
              placeHolderSmallScreen="Location"
              classNamePrefix="select-listing-with-map"
            />
            <Slider className="border-none shadow-none" />
          </div>
          <button className="row-span-2 mt-10 text-white bg-theme_secondary hover:bg-theme_primary font-theme_secondary_light text-sm px-3 py-2 rounded">
            Search
          </button>
        </div>
        <div className="bg-white py-6">
          <div className="flex flex-row justify-between items-center px-6 my-4">
            <div className="space-x-2">
              <CustomIcon
                type={"faBorderAll" as unknown as IconDefinition}
                className="text-theme_secondary bg-white rounded-full border-theme_secondary border-2 cursor-pointer p-2"
              />
              <CustomIcon
                type={"faList" as unknown as IconDefinition}
                className="text-theme_secondary bg-white rounded-full border-theme_secondary border-2 cursor-pointer p-2"
              />
            </div>
            <SelectBox
              data={ratingSelectDropDown}
              placeHolderLargeScreen="Top Rated"
              placeHolderSmallScreen="Top Rated"
              className=""
            />
          </div>
        </div>
        <PaginatedItems itemsPerPage={3} />
      </div>
      <div className="w-full xl:col-span-2">
        <Map
          height={
            screenWidth === 2560
              ? screenWidth - 1500
              : screenWidth > 1366
              ? screenWidth - 500
              : screenWidth > 1024
              ? screenWidth - 500
              : 500
          }
        />
      </div>
    </div>
  )
}

export default ListingWithMap
