import React, { ComponentProps } from "react"

function BadgeCircular(props: ComponentProps<"span">) {
  return (
    <span
      className={props.className + " rounded-[50%] inline-block h-4 w-4"}
    ></span>
  )
}

export default BadgeCircular
