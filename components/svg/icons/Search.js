import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.5 15h6.25v2.5H2.5V15Zm20.212 2.188a6.223 6.223 0 0 0 1.038-3.438c0-3.45-2.8-6.25-6.25-6.25s-6.25 2.8-6.25 6.25S14.05 20 17.5 20c1.275 0 2.45-.387 3.45-1.038l4.788 4.788 1.762-1.762-4.788-4.8ZM17.5 17.5a3.761 3.761 0 0 1-3.75-3.75A3.761 3.761 0 0 1 17.5 10a3.761 3.761 0 0 1 3.75 3.75 3.761 3.761 0 0 1-3.75 3.75Zm-15-8.75h6.25v2.5H2.5v-2.5Zm0 12.5H15v2.5H2.5v-2.5Z"
      fill={props.color ?? "#000000"}
    />
  </Svg>
)

export default SvgComponent
