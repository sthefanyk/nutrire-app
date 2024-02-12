import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#201014"}
      d="M20 19.4 15.4 24 14 22.6l6-6 6 6-1.4 1.4-4.6-4.6Z"
    />
  </Svg>
)
export default IUp
