import React from "react"
import CategoriesMenu from "../../home/CategoriesMenu"
import PopularCategories from "../../home/PopularCategories"
import WelcomeToSinnapi from "../../home/WelcomeToSinnapi"
import Carousel from "../../home/carousel/Carousel"
import { slides } from "../../home/carousel/slides"

function Banner() {
  return (
    <div className="xl:h-[30rem] xl:bg-theme_gray xl:bg-cover xl:bg-center w-full bg-none xl:bg-[url('/images/home/background.jpg')]">
      <div className="h-full xl:grid xl:grid-cols-6 content-center justify-items-center gap-x-2 xl:px-16 max-w-7xl mx-auto">
        {/* Categories side menu bug screens */}
        <div className="hidden xl:flex xl:flex-col rounded-md bg-white xl:col-span-1 xl:w-full">
          <CategoriesMenu />
        </div>
        {/* End of Categories side menu bug screens */}
        {/* Slider section */}
        <div className="w-full xl:col-span-4 mt-0 xl:m-auto">
          <Carousel slides={slides} />
        </div>
        {/* End of Slider section */}
        <div className="hidden xl:flex xl:flex-col justify-between gap-y-2 xl:w-full max-h-96">
          <div className="">
            <WelcomeToSinnapi />
          </div>
          <div className="basis-[10%]">
            <PopularCategories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
