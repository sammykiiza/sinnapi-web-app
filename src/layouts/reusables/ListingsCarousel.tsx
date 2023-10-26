import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { topEventsListings } from "../../utils/data"
import TopEventsListingsCard from "./TopEventsListingsCard"

function ListingsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="text-theme_primary font-theme_secondary_bold py-3">
        Featured Listing
      </div>
      <Slider {...settings}>
        {topEventsListings.slice(0, 4).map((listing, i) => (
          <div className="px-4" key={i}>
            <TopEventsListingsCard
              imageUrl={listing.imageUrl}
              vendorCategory={listing.vendorCategory}
              vendorLocation={listing.vendorLocation}
              vendorName={listing.vendorLocation}
              reviews={listing.reviews}
              iconName={listing.iconName}
              key={i}
            />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default ListingsCarousel
