import React from "react"

function ProgressBar({ progressValue }: { progressValue: number }) {
  return (
    <div className="relative bg-gray-200 rounded-lg h-2 w-full">
      <div
        style={{ width: `${Math.round((progressValue / 5) * 100)}%` }}
        className={`absolute top-0 left-0 bottom-0 bg-theme_secondary rounded-lg h-2`}
      ></div>
    </div>
  )
}

export default ProgressBar
