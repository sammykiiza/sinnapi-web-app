import React, { useMemo, useRef, useState } from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { Popup } from "react-leaflet/Popup"
import "leaflet/dist/leaflet.css"
import { LatLngExpression } from "leaflet"
import { useAppDispatch } from "../../../app/hooks"
import { setPosition as setPositionCache } from "./mapSlice"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import RatingComponent from "../RatingComponent"

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

const center = {
  lat: 0.347596,
  lng: 32.58252,
}

function LocationMarker() {
  const markerRef = useRef<any>(null)
  const [position, setPosition] = useState(center)
  const dispatch = useAppDispatch()
  const eventHandlers: any = useMemo(
    //@ts-ignore
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
          dispatch(setPositionCache(marker.getLatLng()))
        }
      },
    }),
    [position],
  )
  return (
    <Marker
      position={position}
      draggable
      autoPan
      ref={markerRef}
      eventHandlers={eventHandlers as any}
    />
  )
}

function Map({
  height,
  className,
  position,
  settable = false,
  popUpComponent,
  popUpComponentData,
}: {
  height: number
  className?: string
  position?: LatLngExpression
  settable?: boolean
  popUpComponent?: boolean
  popUpComponentData?: any
}) {
  return (
    <div>
      <MapContainer
        center={position ? position : [0.347596, 32.58252]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: `${height}px` }}
        className={className}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {!settable ? (
          <Marker position={position ? position : [0.347596, 32.58252]}>
            <Popup>
              {popUpComponent && popUpComponentData ? (
                <div className="w-full flex flex-col justify-center rounded-md font-theme_secondary_bold">
                  <div>
                    <img
                      src={popUpComponentData.imageUrl}
                      alt="vendor-location-popup"
                      className="object-cover object-center aspect-square rounded"
                    />
                  </div>
                  <div>{popUpComponentData.vendorName}</div>
                  <div>{popUpComponentData.vendorCategory}</div>
                  <div className="flex flex-row items-center font-theme_secondary_light">
                    <RatingComponent />
                    <div>19</div>
                  </div>
                  <button className="capitalize text-white bg-theme_secondary hover:bg-theme_primary rounded text-center px-4 py-1">
                    Request Pricing
                  </button>
                </div>
              ) : (
                <div>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </div>
              )}
            </Popup>
          </Marker>
        ) : (
          <LocationMarker />
        )}
      </MapContainer>
    </div>
  )
}

export default Map
