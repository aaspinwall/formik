import React from "react"
import { Button, RadioButtonGroup } from "@chakra-ui/core"

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "red" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  )
})

const Options = ({ fields, def, call }) => {
  return (
    <RadioButtonGroup defaultValue={def} onChange={val => call(val)} isInline>
      {fields.map((f, i) => (
        <CustomRadio value={i}>{fields[i]}</CustomRadio>
      ))}
    </RadioButtonGroup>
  )
}

export default Options
