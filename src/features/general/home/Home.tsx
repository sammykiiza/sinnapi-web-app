import Banner from "../banners/homepage/Banner"
import TopEventsListings from "./TopEventsListing"
import TopEventsVendors from "./TopEventsVendors"

function Home() {
  return (
    <>
      <Banner />
      <TopEventsVendors />
      <TopEventsListings />
    </>
  )
}

export default Home
