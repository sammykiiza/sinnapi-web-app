import React from "react"
import image from "/images/home/welcome-to-sinnapi-1.png"

function WelcomeToSinnapi() {
  return (
    <div className="h-[6rem]">
      <div className="h-full w-full">
        <img
          src={image}
          alt="welcome to sinnapi"
          className="rounded-t-lg object-cover w-full h-full"
        />
      </div>
      <div className="bg-white text-center rounded-b-lg py-1">
        <h3 className="text-theme_black text-sm font-bold">
          Welcome To Sinnapi
        </h3>
        <p className="text-theme_black text-xs text-[10px]">
          Take a tour to find your favourite vendor and listing
        </p>
        <button className="bg-theme_secondary rounded-md text-white text-[11px] px-2 py-1">
          Find Vendor
        </button>
      </div>
    </div>
  )
}

export default WelcomeToSinnapi
