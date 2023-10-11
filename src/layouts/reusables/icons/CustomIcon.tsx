import React from "react"
import * as icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CustomIcon({
  type,
  className,
}: {
  type: icons.IconDefinition
  className: string
}) {
  return (
    <FontAwesomeIcon
      //@ts-ignore
      icon={icons[type as unknown as keyof typeof icons]}
      className={className}
    />
  )
}

export default CustomIcon
