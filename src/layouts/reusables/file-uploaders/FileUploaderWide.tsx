import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { useRef, useState } from "react"
import CustomIcon from "../icons/CustomIcon"
import { FileUPloaderProps } from "../../../utils/types"

// To Do:
// Complete file uploader later

function FileUploaderWide(props: FileUPloaderProps) {
  const [selectedFile, setSelectedFile] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  /**
   * Simulates clicking on the file Input element
   */
  const fileInputClickSimulation = () => {
    fileInputRef.current?.click()
  }
  return (
    <div
      className={
        props.className +
        " flex flex-row justify-between items-center px-2 xl:px-8 py-4 rounded-b bg-white"
      }
    >
      <div className="flex flex-row items-center gap-x-2 xl:ml-5">
        <img
          src={selectedFile === "" ? props.defaultImage : selectedFile}
          alt="vendor-banner-mini"
          className="object-cover object-center w-20 h-20 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-theme_secondary_bold text-sm">
            Upload Brand Image
          </p>
          <p className="font-theme_secondary_light text-xs text-gray-400">
            Best image size 250 x 250
          </p>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          fileInputClickSimulation()
        }}
        className="flex flex-row items-center justify-center gap-x-1 cursor-pointer rounded-md border px-3 py-2 border-gray-300 text-theme_secondary hover:text-theme_primary text-sm"
      >
        <CustomIcon type={"faPenToSquare" as unknown as IconDefinition} />
        <p>Edit</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept="png,jpg"
        name="image-upload"
        className="hidden"
        onChange={(e) => {
          e.target.files &&
            setSelectedFile(URL.createObjectURL(e.target.files[0]))
        }}
      />
    </div>
  )
}

export default FileUploaderWide
