import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M4 17.17 5.17 16H20V4H4v13.17ZM11 6h2v4h-2V6Zm0 6h2v2h-2v-2Z"
      fill={props.color ?? "#000000"}
    />
    <Path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H5.17L4 17.17V4h16v12Zm-9-4h2v2h-2v-2Zm0-6h2v4h-2V6Z"
      fill={props.color ?? "#000000"}
    />
  </Svg>
)

export default SvgComponent
