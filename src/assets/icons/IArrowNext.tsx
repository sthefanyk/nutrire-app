import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IArrowNext = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M20.6 20 16 15.4l1.4-1.4 6 6-6 6-1.4-1.4 4.6-4.6Z"
    />
  </Svg>
)
export default IArrowNext
