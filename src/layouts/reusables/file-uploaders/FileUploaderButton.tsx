import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import CustomIcon from "../icons/CustomIcon"

// To Do:
// Complete file uploader later

function FileUploaderButton() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-1 cursor-pointer rounded-md border px-3 py-2 border-gray-300 text-theme_secondary hover:text-theme_primary text-sm">
      <CustomIcon type={"faPenToSquare" as unknown as IconDefinition} />
      <p>Edit</p>
    </div>
  )
}

export default FileUploaderButton
