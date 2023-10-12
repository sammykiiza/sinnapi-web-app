import React, { useState } from "react"
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"

function Slider({ className }: { className: string }) {
  const [minValue, set_minValue] = useState(220000)
  const [maxValue, set_maxValue] = useState(2000000)
  const handleInput = (e: ChangeResult) => {
    set_minValue(e.minValue)
    set_maxValue(e.maxValue)
  }
  return (
    <div>
      <MultiRangeSlider
        min={100000}
        max={10000000}
        step={50000}
        label={false}
        ruler={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e)
        }}
        className={className}
      />
    </div>
  )
}

export default Slider
