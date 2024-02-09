import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const IRemove = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={2}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 2V0h14v2H0Z" />
  </Svg>
)
export default IRemove
