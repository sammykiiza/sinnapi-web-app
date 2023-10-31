import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import CustomIcon from "../../../../layouts/reusables/icons/CustomIcon"
import { Tab } from "@headlessui/react"
import { listingsData } from "../../../../utils/data"
import VendorListingCard from "../../../../layouts/reusables/VendorListingCard"
import { ListingsData } from "../../../../utils/types"
import { useWindowSize } from "../../../../utils/hooks/useWindowSize"

function MyListings() {
  const { width: screenWidth } = useWindowSize()
  const filterListingsByStatusPending = (array: ListingsData) => {
    return array.status === "Pending"
  }
  var listingsPending = listingsData.filter(filterListingsByStatusPending)

  const filterListingsByStatusPublish = (array: ListingsData) => {
    return array.status === "Publish"
  }
  var listingsPublish = listingsData.filter(filterListingsByStatusPublish)

  const filterListingsByStatusRemoved = (array: ListingsData) => {
    return array.status === "Removed"
  }
  var listingsRemoved = listingsData.filter(filterListingsByStatusRemoved)

  return (
    <div className="lg:px-14">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl px-2 lg:px-0 text-theme_primary font-theme_secondary_bold">
          My Listings
        </h1>
        <div className="md:col-start-2 justify-self-center bg-theme_secondary hover:bg-theme_primary mt-4 mb-12 rounded py-2 px-3 flex flex-row items-center space-x-2 cursor-pointer">
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="text-white"
          />
          <span className="font-theme_secondary_bold text-xs text-white">
            Add New Listing
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-md mb-6 shadow-xl">
        <div className="bg-white font-theme_secondary_bold text-theme_black text-xs py-4 px-4 rounded-t-md">
          Create your business listing on Sinnapi to start building customers.
        </div>
        <Tab.Group vertical={screenWidth < 768}>
          <div className="rounded-b-md">
            <Tab.List
              className={
                "flex flex-col md:flex-row justify-center md:justify-between md:px-4 md:pt-6 bg-gray-100 md:bg-none"
              }
            >
              <Tab
                className={
                  "font-theme_secondary_bold text-sm text-theme_secondary ui-selected:text-theme_primary py-2 ui-selected:border-b-2 border-b-theme_primary focus:outline-none focus:ring-0"
                }
              >
                All Listings{" "}
                <span className="text-theme_black">
                  (0{listingsData.length})
                </span>
              </Tab>
              <Tab
                className={
                  "font-theme_secondary_bold text-sm text-theme_secondary ui-selected:text-theme_primary py-2 ui-selected:border-b-2 border-b-theme_primary focus:outline-none focus:ring-0"
                }
              >
                Pending{" "}
                <span className="text-theme_black">
                  (0{listingsPending.length})
                </span>
              </Tab>
              <Tab
                className={
                  "font-theme_secondary_bold text-sm text-theme_secondary ui-selected:text-theme_primary py-2 ui-selected:border-b-2 border-b-theme_primary focus:outline-none focus:ring-0"
                }
              >
                Approved{" "}
                <span className="text-theme_black">
                  (0{listingsPublish.length})
                </span>
              </Tab>
              <Tab
                className={
                  "font-theme_secondary_bold text-sm text-theme_secondary ui-selected:text-theme_primary py-2 ui-selected:border-b-2 border-b-theme_primary focus:outline-none focus:ring-0"
                }
              >
                Removed{" "}
                <span className="text-theme_black">
                  (0{listingsRemoved.length})
                </span>
              </Tab>
              <Tab
                className={
                  "font-theme_secondary_bold text-sm text-theme_secondary ui-selected:text-theme_primary py-2 ui-selected:border-b-2 border-b-theme_primary focus:outline-none focus:ring-0"
                }
              >
                Expired <span className="text-theme_black">(00)</span>
              </Tab>
            </Tab.List>
            <Tab.Panels className={"rounded-b-md"}>
              <Tab.Panel className={"bg-white p-4"}>
                {listingsData.map((listing, i) => (
                  <VendorListingCard
                    imageUrl={listing.imageUrl}
                    title={listing.title}
                    location={listing.location}
                    dateAdded={listing.dateAdded}
                    status={listing.status}
                    key={i}
                  />
                ))}
              </Tab.Panel>
              <Tab.Panel className={"bg-white px-4 py-4"}>
                {listingsPending.length > 0
                  ? listingsPending.map((listing, i) => (
                      <VendorListingCard
                        imageUrl={listing.imageUrl}
                        title={listing.title}
                        location={listing.location}
                        dateAdded={listing.dateAdded}
                        status={listing.status}
                        key={i}
                      />
                    ))
                  : "Pending"}
              </Tab.Panel>
              <Tab.Panel className={"bg-white px-4 py-4"}>
                {listingsPublish.length > 0
                  ? listingsPublish.map((listing, i) => (
                      <VendorListingCard
                        imageUrl={listing.imageUrl}
                        title={listing.title}
                        location={listing.location}
                        dateAdded={listing.dateAdded}
                        status={listing.status}
                        key={i}
                      />
                    ))
                  : "Approved"}
              </Tab.Panel>
              <Tab.Panel className={"bg-white px-4 py-4"}>
                {listingsRemoved.length > 0
                  ? listingsRemoved.map((listing, i) => (
                      <VendorListingCard
                        imageUrl={listing.imageUrl}
                        title={listing.title}
                        location={listing.location}
                        dateAdded={listing.dateAdded}
                        status={listing.status}
                        key={i}
                      />
                    ))
                  : "Removed"}
              </Tab.Panel>
              <Tab.Panel className={"bg-white px-4 py-4"}>Expired</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

export default MyListings
