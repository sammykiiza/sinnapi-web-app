import { useEffect, useState } from "react"
import { Tab } from "@headlessui/react"
import FileUploaderCircleWithText from "../../../layouts/reusables/file-uploaders/FileUploaderCircleWithText"
import Wysiwyg from "../../../layouts/reusables/wysiwyg/Wysiwyg"
import SelectBox from "../../../layouts/reusables/SelectBox"
import { selectBoxCategories } from "../../../utils/data"
import FileUploaderSquare from "../../../layouts/reusables/file-uploaders/FileUploaderSquare"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import Map from "../../../layouts/reusables/map/Map"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { setSocialMedia } from "../vendorSlice"

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
  const mapPositionFromCache = useAppSelector((state) => state.map.LatLng)
  const socialMediaData = useAppSelector((state) => state.vendor.SocailMedia)
  const [toggleSocialMediaAddForm, setToggleSocialMediaAddForm] =
    useState(false)
  const [socialMediaTitle, setSocialMediaTitle] = useState("")
  const [socialMediaLink, setSocialMediaLink] = useState("")
  const dispatch = useAppDispatch()
  const handleSocialMediaAddition = () => {
    const socialMediaAddition = {
      title: socialMediaTitle,
      link: socialMediaLink,
    }
    dispatch(setSocialMedia(socialMediaAddition))
  }
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
            {/* Business Profile */}
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
                      placeholder={"Latitude"}
                      defaultValue={mapPositionFromCache.lat}
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                      key={mapPositionFromCache.lat}
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <input
                      type="number"
                      name="longitude"
                      placeholder={"Longitude"}
                      defaultValue={mapPositionFromCache.lng}
                      className="w-full bg-gray-100 rounded-md border border-gray-400 text-xs text-gray-400 p-3 font-theme_secondary_light focus:outline-none focus:ring-0 focus:border-gray-400"
                      key={mapPositionFromCache.lng}
                    />
                  </div>
                </div>
                <Map height={300} settable className="z-auto rounded" />
                <button
                  type="submit"
                  className="mt-12 mb-6 font-theme_secondary_bold text-xs px-3 py-2 whitespace-nowrap text-center rounded-full text-white bg-theme_secondary hover:bg-theme_primary"
                >
                  Update Business Profile
                </button>
              </div>
            </Tab.Panel>
            {/* End of Business Profile */}
            {/* Social Media */}
            <Tab.Panel className={"rounded-md"}>
              <div className="flex flex-col space-y-2 divide-y-2 justify-center bg-white font-theme_secondary_light">
                <div className="px-4 py-2">Social Media</div>
                <div className="my-4 py-4 px-4 flex flex-col items-center">
                  <div className="border border-theme_black w-full divide-y-2 md:divide-y-0 space-y-4 my-4 py-2">
                    {socialMediaData.map((socialMedia, i) => (
                      <div
                        className="grid grid-cols-3 gap-4 px-4 py-4 md:py-0 text-xs"
                        key={i}
                      >
                        <input
                          type="text"
                          placeholder={socialMedia.title}
                          className="bg-gray-100 text-gray-400 rounded border border-gray-400 p-2 col-span-3 md:col-span-1 text-xs focus:outline-none focus:ring-0 focus:border-gray-400"
                        />
                        <input
                          type="text"
                          placeholder={socialMedia.link}
                          className="bg-gray-100 text-gray-400 rounded border border-gray-400 p-2 col-span-3 md:col-span-2 text-xs focus:outline-none focus:ring-0 focus:border-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSocialMediaAddition()
                    }}
                    className={
                      (!toggleSocialMediaAddForm ? "hidden" : "") +
                      " w-full my-4 grid grid-cols-3 gap-4 text-xs"
                    }
                  >
                    <input
                      type="text"
                      placeholder={"Title"}
                      className="bg-gray-100 text-gray-400 rounded border border-gray-400 p-2 col-span-3 md:col-span-1 text-xs focus:outline-none focus:ring-0 focus:border-gray-400"
                      onChange={(e) => setSocialMediaTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder={"Link"}
                      className="bg-gray-100 text-gray-400 rounded border border-gray-400 p-2 col-span-3 md:col-span-2 text-xs focus:outline-none focus:ring-0 focus:border-gray-400"
                      onChange={(e) => setSocialMediaLink(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-theme_secondary hover:bg-theme_primary text-white text-sm px-3 py-1 font-theme_secondary_bold justify-self-start rounded"
                    >
                      Add
                    </button>
                  </form>
                  <div
                    className="self-center bg-theme_secondary hover:bg-theme_primary rounded py-2 px-3 flex flex-row items-center space-x-2 cursor-pointer"
                    onClick={() => setToggleSocialMediaAddForm(true)}
                  >
                    <CustomIcon
                      type={"faPlus" as unknown as IconDefinition}
                      className="text-white"
                    />
                    <span className="font-theme_secondary_bold text-sm text-white">
                      Add Social Media
                    </span>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            {/* End of Social Media */}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export default Profile
