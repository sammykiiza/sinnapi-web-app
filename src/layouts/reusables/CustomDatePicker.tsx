import React, { useState } from "react"
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, {
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker"

function CustomDatePicker() {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null)
  const formatInputValue = () => {
    if (!selectedDay) return ""
    return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
  }

  return (
    <>
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        inputPlaceholder="Select Date"
        formatInputText={formatInputValue}
        inputClassName="custom-date-input"
        shouldHighlightWeekends
      />
    </>
  )
}

export default CustomDatePicker
