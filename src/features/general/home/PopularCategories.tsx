import React from "react"
import image from "/images/home/welcome-to-sinnapi-small.png"
import { Link } from "react-router-dom"

function PopularCategories() {
  return (
    <div className="bg-white rounded-md p-1">
      <h2 className="border-b text-md text-center">Popular Categories</h2>
      <div className="grid grid-cols-4 gap-1 content-center justify-items-center text-xs h-full">
        <div className="col-span-2">
          <Link to={"/"}>
            <img
              src={image}
              alt="popular categories"
              className="object-scale-down m-auto"
            />
            <p>Photography</p>
          </Link>
        </div>
        <div className="col-span-2">
          <Link to={"/"}>
            <img
              src={image}
              alt="popular categories"
              className="object-scale-down m-auto"
            />
            <p>Music Systems</p>
          </Link>
        </div>
        <div className="col-span-2">
          <Link to={"/"}>
            <img
              src={image}
              alt="popular categories"
              className="object-scale-down m-auto"
            />
            <p>Cakes</p>
          </Link>
        </div>
        <div className="col-span-2">
          <Link to="/">
            <img
              src={image}
              alt="popular categories"
              className="object-scale-down m-auto"
            />
            <p>Venues</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories
