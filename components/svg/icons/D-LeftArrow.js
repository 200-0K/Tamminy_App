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
      d="M13.959 3.939a.768.768 0 0 1 1.1 0 .806.806 0 0 1 0 1.125l-8.223 8.434 8.223 8.436a.807.807 0 0 1-.013 1.141.769.769 0 0 1-1.087-.014l-8.745-8.974a.843.843 0 0 1 0-1.178l8.745-8.97Zm6.75 0a.768.768 0 0 1 1.1 0 .806.806 0 0 1 0 1.125l-8.223 8.434 8.223 8.436a.807.807 0 0 1-.013 1.141.769.769 0 0 1-1.087-.014l-8.745-8.974a.843.843 0 0 1 0-1.178l8.745-8.97Z"
      fill={props.color ?? "#000"}
    />
  </Svg>
)

export default SvgComponent
