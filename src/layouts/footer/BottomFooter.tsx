import React from "react"
import { Link } from "react-router-dom"

function BottomFooter() {
  return (
    <div className="bg-theme_primary font-theme_secondary_light text-gray-400 py-4">
      <div className="grid max-lg:grid-rows-2 lg:grid-cols-5 justify-items-center max-w-7xl mx-auto">
        <div className="max-lg:row-span-1 lg:col-span-2 text-xs">
          <span>&copy; {new Date().getFullYear()} </span>
          <span>
            All rights reserved. Powered by{" "}
            <Link to={""} target="_blank">
              LOGOS
            </Link>
          </span>
        </div>
        <div className="flex flex-row max-lg:row-span-1 lg:col-span-3 items-center divide-x text-xs">
          <div className="px-2">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="px-2">
            <Link to={"/"}>About</Link>
          </div>
          <div className="px-2">
            <Link to={"/"}>Contact US</Link>
          </div>
          <div className="px-2">
            <Link to={"/"}>Terms & Conditions</Link>
          </div>
          <div className="px-2">
            <Link to={"/"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter
