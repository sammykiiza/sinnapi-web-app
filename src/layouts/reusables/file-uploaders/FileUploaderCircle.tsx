import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { ComponentProps, useRef, useState } from "react"
import CustomIcon from "../icons/CustomIcon"

function FileUploaderCircle(props: ComponentProps<"div">) {
  const [selectedImage, setSelectedImage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const fileInputClick = () => {
    fileInputRef.current?.click()
  }

  // eslint-disable-next-line no-lone-blocks
  {
    /*To Do
  make sure to revoke the created blob 
  i.e URL.createObjectURL(e.target.files[0]) for profile image below 
  with URL.revokeObjectURL*/
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="flex flex-col items-center justify-center relative bg-teal-100 w-[100px] h-[100px] cursor-pointer rounded-full"
        onClick={(e) => {
          e.stopPropagation()
          fileInputClick()
        }}
      >
        {selectedImage !== "" && (
          <img
            src={selectedImage}
            alt="profile"
            className="rounded-full w-[100px] h-[100px] object-center object-cover"
          />
        )}
        <CustomIcon
          type={"faPenToSquare" as unknown as IconDefinition}
          className="absolute top-0 right-1 bg-white rounded-full border-2 border-teal-300 p-1 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            fileInputClick()
          }}
        />
        {selectedImage === "" && (
          <CustomIcon
            type={"faImage" as unknown as IconDefinition}
            className="text-2xl text-gray-400 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              fileInputClick()
            }}
          />
        )}
        <input
          type="file"
          ref={fileInputRef}
          name="profile-image-upload"
          id="profile-image-upload"
          accept="png,jpg"
          onChange={(e) => {
            e.target.files &&
              setSelectedImage(URL.createObjectURL(e.target.files[0]))
          }}
          className="hidden ml-32 cursor-pointer absolute"
        />
      </div>
    </div>
  )
}

export default FileUploaderCircle
