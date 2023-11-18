import React, { useState } from "react"

function FileUploader({
  id,
  label,
  className,
}: {
  id: string
  label: string
  className?: string
}) {
  const [selectedFile, setSelectedFile] = useState("")
  // const fileInputRef = useRef<HTMLInputElement>(null)

  /**
   * Simulates clicking on the file Input element
   */
  // const fileInputClickSimulation = () => {
  //   fileInputRef.current?.click()
  // }

  // eslint-disable-next-line no-lone-blocks
  {
    /*To Do
  make sure to revoke the created blob 
  i.e URL.createObjectURL(e.target.files[0]) for profile image below 
  with URL.revokeObjectURL*/
  }
  return (
    <div
      className={
        "flex flex-col items-start justify-center space-y-2 text-gray-600 text-sm font-theme_secondary_light " +
        className
      }
    >
      <label htmlFor={`file-upload-${id}`} className="text-gray-800 text-base">
        {label}
      </label>
      <input
        type="file"
        name="file-upload"
        id={`file-upload-${id}`}
        onChange={(e) => {
          e.target.files &&
            setSelectedFile(URL.createObjectURL(e.target.files[0]))
        }}
      />
    </div>
  )
}

export default FileUploader
