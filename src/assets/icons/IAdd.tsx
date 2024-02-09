import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IAdd = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path fill={props.color || "#fff"} d="M6 8H0V6h6V0h2v6h6v2H8v6H6V8Z" />
  </Svg>
)
export default IAdd
