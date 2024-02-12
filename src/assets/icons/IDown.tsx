import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#201014"}
      d="m20.975 21.6 4.605-4.595 1.399 1.402L20.97 24.4l-5.992-6.007 1.402-1.399 4.594 4.606Z"
    />
  </Svg>
)
export default IDown
