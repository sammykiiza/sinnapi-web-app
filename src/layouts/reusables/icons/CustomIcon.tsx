import React from "react"
import * as icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CustomIcon({
  type,
  className,
  onClick,
}: {
  type: icons.IconDefinition
  className?: string
  onClick?: React.MouseEventHandler<SVGSVGElement>
}) {
  return (
    <FontAwesomeIcon
      //@ts-ignore
      icon={icons[type as unknown as keyof typeof icons]}
      className={className}
      onClick={onClick}
    />
  )
}

export default CustomIcon
