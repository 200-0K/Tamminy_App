import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={props.size ?? 27}
    height={props.size ?? 27}
    fill="none"
    viewBox="0 0 27 27"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m16.068 3.939-8.744 8.97a.844.844 0 0 0 0 1.178l8.744 8.974a.769.769 0 0 0 1.1 0 .807.807 0 0 0 0-1.127l-8.223-8.436 8.224-8.434a.807.807 0 0 0 0-1.125.767.767 0 0 0-1.1 0Z"
      fill={props.color ?? "#000"}
    />
  </Svg>
)

export default SvgComponent