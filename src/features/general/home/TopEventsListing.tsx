import TopEventsListingsCard from "../../../layouts/reusables/TopEventsListingsCard"
import { topEventsListings } from "../../../utils/data"

function TopEventsListings() {
  return (
    <div className="bg-[url('/images/home/events-listing/background-top-events-listings.png')] bg-repeat bg-gray-100 flex flex-col gap-y-14 py-10">
      <div className="">
        <h1 className="font-theme_primary_bold font-medium text-theme_primary text-3xl text-center">
          TOP EVENTS LISTINGS
        </h1>
        <p className="font-theme_primary_light text-theme_black text-xs text-center">
          Discover the Best Overall Event Listings
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 content-center justify-items-center px-2 gap-x-2 gap-y-2 md:gap-y-2 md:px-1 lg:gap-y-20 lg:gap-x-4 xl:gap-x-4 lg:px-10 xl:px-20 w-full  max-w-7xl mx-auto">
        {topEventsListings.map((listing, i) => (
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
      <div className="self-center xl:mt-8">
        <button className="bg-theme_secondary hover:bg-white rounded-full text-xs font-theme_secondary_bold text-white hover:text-theme_secondary p-3 ease-linear duration-100">
          View More Vendors
        </button>
      </div>
    </div>
  )
}

export default TopEventsListings
