import React, { useEffect, useState } from "react"
import { Tab } from "@headlessui/react"
import FileUploaderCircleWithText from "../../../layouts/reusables/file-uploaders/FileUploaderCircleWithText"
import Wysiwyg from "../../../layouts/reusables/wysiwyg/Wysiwyg"
import SelectBox from "../../../layouts/reusables/SelectBox"
import { selectBoxCategories } from "../../../utils/data"
import FileUploaderSquare from "../../../layouts/reusables/file-uploaders/FileUploaderSquare"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import Map from "../../../layouts/reusables/map/Map"

function Profile() {
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
    <div className="space-y-12">
      <h1 className="text-3xl px-2 lg:px-0 text-theme_primary font-theme_secondary_bold">
        My Profile
      </h1>
      <Tab.Group defaultIndex={0} vertical={screenWidth > 1024}>
        <div className="grid grid-cols-8 gap-x-6 gap-y-6">
          <Tab.List
            className={
              "col-span-8 xl:col-span-2 border-b-2 xl:border-none flex flex-row xl:flex-col bg-white xl:divide-y-2 rounded text-theme_black text-sm font-theme_secondary_bold xl:font-theme_secondary_light xl:h-24"
            }
          >
            <Tab
              className={
                "ui-selected:text-theme_secondary hover:text-theme_secondary text-gray-600 xl:text-theme_black text-left px-3 py-3 focus:border-none focus:outline-none focus:ring-0"
              }
            >
              Business Profile
            </Tab>
            <Tab
              className={
                "ui-selected:text-theme_secondary hover:text-theme_secondary text-gray-600 xl:text-theme_black text-left px-3 py-3 focus:border-none focus:outline-none focus:ring-0"
              }
            >
              Social Media
            </Tab>
          </Tab.List>
          <Tab.Panels
            className={"col-span-8 xl:col-span-6 mb-10 bg-gray-100 shadow-xl"}
          >
            <Tab.Panel className={"rounded-md"}>
              <div className="w-full bg-white font-theme_secondary_light text-sm px-4 py-6">
                Business Profile
              </div>
              <div className="w-full font-theme_secondary_bold text-theme_secondary text-sm px-4 py-6">
                Profile Image
              </div>
              <FileUploaderCircleWithText className="bg-white" />
              <div className="w-full font-theme_secondary_bold text-theme_secondary text-sm px-4 py-6">
                Brand Image
              </div>
              <FileUploaderCircleWithText className="bg-white" />
              <div className="w-full font-theme_secondary_bold text-theme_secondary text-sm px-4 py-6">
                About Business
              </div>
              <div className="flex flex-col bg-white px-2 md:px-8">
                <div className="grid grid-cols-3 gap-x-20 gap-y-4 py-6">
                  <div className="col-span-3 md:col-span-1">
                    <input
                      type="text"
                      name="business-name"
                      placeholder="Business Name"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <input
                      type="text"
                      name="business-website"
                      placeholder="Business Website"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <input
                      type="text"
                      name="business-video"
                      placeholder="Business Video"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                </div>
                <div className="">
                  <Wysiwyg />
                </div>
                <div className="grid grid-cols-6 gap-x-8 gap-y-4 py-6">
                  <div className="col-span-6 md:col-span-3">
                    <input
                      type="text"
                      name="business-video"
                      placeholder="Business Video"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <SelectBox
                      data={selectBoxCategories}
                      name="select-district"
                      classNamePrefix="district"
                      placeHolderLargeScreen="Select District"
                      placeHolderSmallScreen="District"
                      className="placeholder:text-xs text-xs"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full font-theme_secondary_bold text-theme_secondary text-sm px-4 py-6">
                Business Gallery
              </div>
              <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-6 p-4 bg-white">
                <FileUploaderSquare defaultImage="/images/vendor/profile/vendor-gallery-1.jpg" />
                <FileUploaderSquare />
                <FileUploaderSquare />
                <div className="md:col-start-2 justify-self-center bg-theme_secondary hover:bg-theme_primary mt-4 mb-12 rounded py-2 px-3 flex flex-row items-center space-x-2 cursor-pointer">
                  <CustomIcon
                    type={"faPlus" as unknown as IconDefinition}
                    className="text-white"
                  />
                  <span className="font-theme_secondary_bold text-sm text-white">
                    Browse Image
                  </span>
                </div>
              </div>
              <div className="w-full font-theme_secondary_bold text-theme_secondary text-sm px-4 py-6">
                Location Map
              </div>
              <div className="bg-white px-2 md:px-8 py-6">
                <div className="grid grid-cols-6 gap-x-8 gap-y-4 py-6">
                  <div className="col-span-6 md:col-span-3">
                    <input
                      type="number"
                      name="latitude"
                      placeholder="Latitude"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <input
                      type="number"
                      name="longitude"
                      placeholder="Longitude"
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                </div>
                <Map height={300} className="z-0 rounded" />
                <button
                  type="submit"
                  className="mt-12 mb-6 font-theme_secondary_bold text-xs px-3 py-2 whitespace-nowrap text-center rounded-full text-white bg-theme_secondary hover:bg-theme_primary"
                >
                  Update Business Profile
                </button>
              </div>
            </Tab.Panel>
            <Tab.Panel className={"rounded-md"}>Content 2</Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export default Profile
