import React from "react"

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core"

const DisplayControls = ({ callback, controls }) => {
  const [acc, setAcc] = React.useState(controls.default)

  React.useEffect(() => {
    console.log(acc)
    callback(acc)
  }, [acc])

  return (
    <Slider
      defaultValue={controls.default}
      color="red"
      min={controls.min}
      max={controls.max}
      step={controls.step}
      onChange={value => {
        setAcc(value)
      }}
    >
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  )
}

export default DisplayControls
