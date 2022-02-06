import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 14.155a5 5 0 0 1-5-5v-4a1 1 0 0 1 1-1h1a1 1 0 0 0 0-2H7a3 3 0 0 0-3 3v4a6.98 6.98 0 0 0 3.02 5.74 8.82 8.82 0 0 1 2.98 6.26 7 7 0 0 0 14 0v-1.14a4 4 0 1 0-2 0v1.14a5 5 0 0 1-10 0 8.82 8.82 0 0 1 3-6.26 6.98 6.98 0 0 0 3-5.74v-4a3 3 0 0 0-3-3h-1a1 1 0 1 0 0 2h1a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5Zm12 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill={props.color ?? "#000000"}
    />
  </Svg>
)

export default SvgComponent
