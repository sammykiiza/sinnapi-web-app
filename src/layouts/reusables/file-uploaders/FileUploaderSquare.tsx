import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { useRef, useState } from "react"
import CustomIcon from "../icons/CustomIcon"
import { FileUPloaderProps } from "../../../utils/types"

function FileUploaderSquare(props: FileUPloaderProps) {
  const [selectedImage, setSelectedImage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  /**
   * Simulates clicking on the file Input element
   */
  const fileInputClickSimulation = () => {
    fileInputRef.current?.click()
  }
  return (
    <>
      <div
        className={
          (selectedImage === "" && !props.defaultImage ? "bg-teal-100" : "") +
          " relative rounded-md grid"
        }
      >
        {(selectedImage || props.defaultImage) && (
          <CustomIcon
            type={"faPenToSquare" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-gray-400 justify-self-end rounded-md m-1 p-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              fileInputClickSimulation()
            }}
          />
        )}
        {selectedImage === "" && !props.defaultImage && (
          <CustomIcon
            type={"faPlus" as unknown as IconDefinition}
            className="absolute bg-white text-xs text-gray-400 justify-self-end rounded m-0.5 p-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              fileInputClickSimulation()
            }}
          />
        )}
        {selectedImage === "" && !props.defaultImage && (
          <CustomIcon
            type={"faImage" as unknown as IconDefinition}
            className="text-3xl text-gray-400 justify-self-center self-center rounded cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              fileInputClickSimulation()
            }}
          />
        )}
        {(selectedImage || props.defaultImage) && (
          <img
            src={selectedImage || props.defaultImage}
            alt="gallery-vendor"
            className="object-cover object-center rounded-md cursor-pointer aspect-video"
            onClick={(e) => {
              e.stopPropagation()
              fileInputClickSimulation()
            }}
          />
        )}
        <input
          type="file"
          name="image-gallery-vendor"
          ref={fileInputRef}
          className="hidden"
          accept="png,jpg"
          onChange={(e) => {
            e.target.files &&
              setSelectedImage(URL.createObjectURL(e.target.files[0]))
          }}
        />
      </div>
    </>
  )
}

export default FileUploaderSquare
