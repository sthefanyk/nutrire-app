import * as React from "react"
import Svg, { SvgProps, Mask, Rect, Path } from "react-native-svg"
const INew = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Rect width={20} height={20} x={2} y={2} rx={1.987} />
    </Mask>
    <Rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke={props.color || "#fff"}
      strokeWidth={4}
      mask="url(#a)"
      rx={1.987}
    />
    <Path
      fill={props.color || "#fff"}
      d="M11.361 12.639H7.53V11.36h3.831V7.53h1.278v3.831h3.831v1.278H12.64v3.831H11.36V12.64Z"
    />
  </Svg>
)
export default INew

