import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SliderBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        <img
          src="/images/general/listings/singular/banner-image-2.jpg"
          alt="listing-singular-banner-middle"
          className="object-cover object-center aspect-video w-full h-96 2xl:h-[30rem]"
          key={1}
        />
        <img
          src="/images/general/listings/singular/banner-image-1.jpg"
          alt="listing-singular-banner-middle"
          className="object-cover object-center aspect-video w-full h-96 2xl:h-[30rem]"
          key={2}
        />
        <img
          src="/images/general/listings/singular/banner-image-3.jpg"
          alt="listing-singular-banner-middle"
          className="object-cover object-center aspect-video w-full h-96 2xl:h-[30rem]"
          key={3}
        />
      </Slider>
    </>
  )
}

export default SliderBanner
