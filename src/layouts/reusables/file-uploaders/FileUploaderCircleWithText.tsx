import React, { ComponentProps } from "react"
import FileUploaderCircle from "./FileUploaderCircle"

function FileUploaderCircleWithText(props: ComponentProps<"div">) {
  return (
    <div
      className={
        props.className +
        " flex flex-col md:flex-row px-20 py-8 gap-x-4 gap-y-4 justify-center items-center"
      }
    >
      <FileUploaderCircle />
      <div className="flex flex-col items-center md:items-start font-theme_secondary_light">
        <h3 className="font-bold text-sm">Upload Profile Image</h3>
        <p className="text-gray-400 text-center text-xs">
          Files must be less than <span className="text-theme_black">4mb</span>,
          allowed file types are{" "}
          <span className="text-theme_black">png/jpg</span>
        </p>
      </div>
    </div>
  )
}

export default FileUploaderCircleWithText
