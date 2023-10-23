import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { ComponentProps, useEffect, useRef, useState } from "react"
import CustomIcon from "./icons/CustomIcon"
import { ListingsData } from "../../utils/types"
type VendorListingCardProps = ListingsData & ComponentProps<"div">

function VendorListingCard(props: VendorListingCardProps) {
  const [toggleEditMenu, setToggleEditMenu] = useState(false)
  const actionDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: React.MouseEvent & React.TouchEvent) => {
      if (!actionDiv.current?.contains(e.target as unknown as any)) {
        setToggleEditMenu(false)
      }
    }

    document.addEventListener("mousedown", handler as unknown as any)
  })
  return (
    <div
      className={
        props.className +
        " grid grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-2 items-center py-6 px-4"
      }
    >
      <div className="row-span-2 md:row-span-1 col-span-1 rounded-lg">
        <img
          src={props.imageUrl}
          alt="listing"
          className="object-center object-cover rounded-lg aspect-video h-28"
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col">
        <p className="font-theme_secondary_bold text-xs md:text-sm">
          {props.title}
        </p>
        <p className="font-theme_secondary_light text-gray-400 text-xs">
          Kampala
        </p>
      </div>
      <div className="col-span-1 flex flex-col font-theme_secondary_light text-xs text-gray-400">
        <span>Date Added</span>
        <span className="border rounded-md text-xs pl-1 md:mr-6">
          {props.dateAdded}
        </span>
      </div>
      <div className="col-span-1 flex flex-col md:justify-self-center font-theme_secondary_light text-xs text-gray-400">
        <span>Status</span>
        <span
          className={
            (props.status === "Pending"
              ? "border-amber-400 text-amber-400"
              : props.status === "Publish"
              ? "border-green-400 text-green-400"
              : props.status === "Draft"
              ? "border-gray-400 text-gray-400"
              : props.status === "Awaiting Approval"
              ? "border-red-400 text-red-400"
              : props.status === "Removed"
              ? "border-red-400 text-red-400"
              : "") + " border rounded px-1"
          }
        >
          {props.status}
        </span>
      </div>
      <div className="md:justify-self-center flex flex-col text-xs text-gray-400">
        <span onClick={() => setToggleEditMenu(!toggleEditMenu)}>Action</span>
        <CustomIcon
          type={"faEllipsis" as unknown as IconDefinition}
          className="border border-gray-500 hover:border-theme_secondary rounded cursor-pointer hover:text-theme_secondary text-base"
          onClick={() => setToggleEditMenu(!toggleEditMenu)}
        />
        <div
          className={
            (toggleEditMenu === false ? "hidden" : "flex") +
            " flex-col gap-y-1 bg-white absolute text-theme_black shadow-lg mt-10 md:-ml-10"
          }
          ref={actionDiv}
        >
          <div className="flex flex-row gap-x-2 items-center hover:bg-theme_secondary w-full px-2 cursor-pointer py-1">
            <CustomIcon type={"faPenToSquare" as unknown as IconDefinition} />
            <span>Edit</span>
          </div>
          <div className="flex flex-row gap-x-2 items-center hover:bg-theme_secondary w-full px-2 cursor-pointer py-1">
            <CustomIcon type={"faEye" as unknown as IconDefinition} />
            <span>Preview</span>
          </div>
          <div className="flex flex-row gap-x-2 items-center hover:bg-theme_secondary w-full px-2 cursor-pointer py-1">
            <CustomIcon type={"faCopy" as unknown as IconDefinition} />
            <span>Duplicate</span>
          </div>
          <div className="flex flex-row gap-x-2 items-center hover:bg-theme_secondary w-full px-2 cursor-pointer py-1">
            <CustomIcon type={"faPaperPlane" as unknown as IconDefinition} />
            <span>Publish</span>
          </div>
          <div className="flex flex-row gap-x-2 items-center hover:bg-theme_secondary w-full px-2 cursor-pointer py-1">
            <CustomIcon type={"faTrashCan" as unknown as IconDefinition} />
            <span>Removed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorListingCard
