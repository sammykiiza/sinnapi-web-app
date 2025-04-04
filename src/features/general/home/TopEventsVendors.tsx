import TopEventsVendorsCard from "../../../layouts/reusables/TopEventsVendorsCard"
import { topEventsVendors } from "../../../utils/data"

function TopEventsVendors() {
  return (
    <div className="bg-gradient-to-b from-theme_primary to-theme_secondary flex flex-col gap-y-14 py-10">
      <div className="">
        <h1 className="font-theme_primary_bold font-semibold text-white text-3xl text-center">
          Top Events Vendors
        </h1>
        <p className="font-theme_primary_light text-white text-md text-center">
          Premier Event Suppliers
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 content-center justify-items-center px-2 gap-x-2 gap-y-2 md:gap-y-2 md:px-1 lg:gap-y-20 lg:gap-x-4 xl:gap-x-4 lg:px-10 xl:px-20 w-full  max-w-7xl mx-auto">
        {topEventsVendors.map((vendor, i) => (
          <TopEventsVendorsCard
            imageUrl={vendor.imageUrl}
            iconName={vendor.iconName}
            vendorCategory={vendor.vendorCategory}
            vendorLocation={vendor.vendorLocation}
            key={i}
          />
        ))}
      </div>
      <div className="self-center xl:mt-8">
        <button className="bg-white hover:bg-theme_primary rounded-full text-xs font-theme_secondary_bold text-theme_secondary hover:text-white p-3 ease-linear duration-100">
          View More Vendors
        </button>
      </div>
    </div>
  )
}

export default TopEventsVendors
