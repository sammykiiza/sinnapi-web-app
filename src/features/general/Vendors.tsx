import React, { useState } from "react"
import Banner from "./banners/other-pages/Banner"
import ReactPaginate from "react-paginate"
import { topEventsVendors } from "../../utils/data"
import TopEventsVendorsCard from "../../layouts/reusables/TopEventsVendorsCard"

function Vendors() {
  const itemsPerPage = 6
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = topEventsVendors.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(topEventsVendors.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % topEventsVendors.length
    setItemOffset(newOffset)
  }
  return (
    <div className="bg-gray-100">
      <div className="">
        <Banner pageTitle="vendors" />
      </div>
      <div className="mt-20">
        <div className="px-2 md:px-0">
          <h1 className="font-theme_primary_bold font-semibold text-theme_primary text-3xl text-center">
            Events Vendors
          </h1>
          <p className="font-theme_primary_light text-theme_primary text-md text-center">
            Exceptional service delivery by outstanding vendor businesses
          </p>
        </div>
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-4 px-1 place-content-center`}
            >
              {currentItems.map((listing, i) => (
                <TopEventsVendorsCard
                  imageUrl={listing.imageUrl}
                  vendorCategory={listing.vendorCategory}
                  vendorLocation={listing.vendorLocation}
                  iconName={listing.iconName}
                  key={i}
                />
              ))}
            </div>

            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className="pagination h-5"
              hrefAllControls
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vendors
