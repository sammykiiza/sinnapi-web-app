// Select.tsx
import React, { ChangeEvent } from "react"

interface SelectProps {
  options: string[]
  value: string
  className?: string
  onChange: (value: string) => void
}

const CustomSelect: React.FC<SelectProps> = ({
  options,
  value,
  className,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={"border rounded " + className}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default CustomSelect
