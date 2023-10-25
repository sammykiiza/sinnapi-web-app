import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { topEventsListings } from "../../utils/data"
import TopEventsListingsCard from "./TopEventsListingsCard"

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = topEventsListings.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(topEventsListings.length / itemsPerPage)

  const [listView, setListView] = useState(false)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % topEventsListings.length
    setItemOffset(newOffset)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={
          listView
            ? `grid grid-rows-3 px-6 row-span-1 justify-self-start w-8/12`
            : `grid grid-cols-1 md:grid-cols-3 gap-4 px-1 place-content-center`
        }
      >
        {currentItems.map((listing, i) => (
          <TopEventsListingsCard
            imageUrl={listing.imageUrl}
            vendorCategory={listing.vendorCategory}
            vendorLocation={listing.vendorLocation}
            vendorName={listing.vendorLocation}
            reviews={listing.reviews}
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
        className="pagination basis-1/6 h-5"
        hrefAllControls
      />
    </div>
  )
}

export default PaginatedItems
