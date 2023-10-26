import React, { useState } from "react"
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker"

const CustomCalendar = () => {
  const defaultFrom = {
    year: 2020,
    month: 10,
    day: 7,
  }

  const defaultTo = {
    year: 2020,
    month: 10,
    day: 10,
  }

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  }

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange)
  return (
    <Calendar
      value={selectedDayRange}
      calendarClassName="custom-calendar"
      colorPrimary="#1DAA75"
      colorPrimaryLight="#1DAA75"
    />
  )
}

export default CustomCalendar
