import { Link } from "react-router-dom"
import FileUploaderWide from "../../../layouts/reusables/file-uploaders/FileUploaderWide"
import { listingsData } from "../../../utils/data"
import VendorListingCard from "../../../layouts/reusables/VendorListingCard"

function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-4 lg:px-2 xl:px-20 mb-10 w-full">
        <div className="lg:rounded relative shadow-xl">
          <img
            src="/images/vendor/dashboard/banner.jpg"
            alt="vendor-dashboard-banner"
            className="object-cover object-center w-full h-64 -mb-8 lg:rounded"
          />
          <FileUploaderWide defaultImage="/images/vendor/dashboard/banner-mini.jpg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              89
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">Your Review</h1>
              <Link
                to={"/vendor/reviews"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              12
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">
                Listed Items
              </h1>
              <Link
                to={"/vendor/listings"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 p-4 bg-white rounded drop-shadow-xl">
            <h1 className="bg-gray-300 px-3 rounded py-2 text-theme_secondary text-2xl">
              29
            </h1>
            <div>
              <h1 className="text-sm font-theme_secondary_bold">
                Profile Views
              </h1>
              <Link
                to={"/vendor/profile"}
                className="text-gray-200 hover:text-theme_secondary text-xs"
              >
                Vendors hired
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md drop-shadow-xl divide-y-2">
          <div className="flex flex-row justify-between p-4">
            <h3 className="font-theme_secondary_bold text-theme_secondary">
              Your Listings
            </h3>
            <Link
              to={"/vendor/listings"}
              className="text-xs hover:text-theme_secondary"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col divide-y-2">
            {listingsData.slice(0, 3).map((listing, i) => (
              <VendorListingCard
                imageUrl={listing.imageUrl}
                title={listing.title}
                location={listing.location}
                dateAdded={listing.dateAdded}
                status={listing.status}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
