import React, { ComponentProps } from "react"
import CustomIcon from "./icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type RatingComponentProps = ComponentProps<"div">

function RatingComponent(props: RatingComponentProps) {
  return (
    <div className={props.className}>
      {[1, 2, 3, 4].map((element, i) => (
        <CustomIcon
          type={"faStar" as unknown as IconDefinition}
          className="text-yellow-400 rounded-full p-1 text-[0.5rem]"
          key={i}
        />
      ))}
      <CustomIcon
        type={"faStarHalfStroke" as unknown as IconDefinition}
        className="text-yellow-400 rounded-full p-1 text-[0.5rem]"
      />
    </div>
  )
}

export default RatingComponent
