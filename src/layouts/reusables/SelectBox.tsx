import React, { useEffect, useState } from "react"
import ReactSelect from "react-select"

export interface SelectBoxProps {
  data: {
    value: string
    label: string
  }[]
  className?: string
  classNamePrefix?: string
  name?: string
  placeHolderLargeScreen?: string
  placeHolderSmallScreen?: string
}

export default function SelectBox(props: SelectBoxProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateScreenWidth)
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])
  return (
    <div>
      <ReactSelect
        options={props.data}
        placeholder={
          screenWidth <= 1024
            ? `${props.placeHolderSmallScreen}`
            : `${props.placeHolderLargeScreen}`
        }
        isSearchable={true}
        className={`${props.className}`}
        classNamePrefix={`select-${props.classNamePrefix}`}
        name={props.name}
      />
    </div>
  )
}
