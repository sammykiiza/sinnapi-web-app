import React from "react"
import Map from "../../../layouts/reusables/map/Map"

function ListingWithMap() {
  return (
    <div className="grid grid-cols-4 w-full">
      <div className="col-span-3"></div>
      <div className="col-span-1 h-full">
        <Map height={100} />
      </div>
    </div>
  )
}

export default ListingWithMap
